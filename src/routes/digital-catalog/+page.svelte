<script>
  	import { getBooks } from '$lib';
  	import PaginatedView from '$lib/paginated-view.svelte';
	import Search from '$lib/search.svelte';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	let resultsPage = $state(data.resultsPage);
	let books = $state(data.books);
	let searchTerm = $state(data.searchTerm);
	let totalResults = $state(data.totalResults);

	// $effect means this anonymous function will be called every time resultsPage or searchTerm is updated
	$effect(async () => { // https://svelte.dev/docs/svelte/$effect
		const res = await getBooks(resultsPage, searchTerm);
		books = res.books;
		totalResults = res.totalResults;
	})
</script>
<h1>Blog</h1>

<noscript>
	JAVASCRIPT DISABLED
</noscript>

<!-- bind: allows PaginatedView to update the value of resultsPage -->
<Search bind:searchTerm={searchTerm}/>
<PaginatedView
	name="results"
	bind:pageNr={resultsPage}
	totalResults={totalResults}
	preserveFields={{q: searchTerm}}
/>
<table>
	<thead>
		<tr>
			<th>Titel</th>
			<th>Auteur</th>
			<th>Publicatie jaar</th>
		</tr>
	</thead>
	<tbody>
		{#each books as book}
			<tr>
				<td>{book.title}</td>
				<td>{book.author}</td>
				<td>{book.publicationYear}</td>
			</tr>
		{/each}
	</tbody>
</table>
<style>
	table, td, th {
		border: none;
		border-collapse: collapse;
	}
	thead, thead tr, th {
		background-color: #ccc;
	}

	tbody tr:nth-of-type(even) td {
		background-color: #eee;
	}

	th {
		text-align: left;
	}

	td {
		padding-right: 1em;
	}
</style>