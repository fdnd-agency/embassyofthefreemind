<script>
  	import { getBooks } from '$lib';
  	import PaginatedView from '$lib/paginated-view.svelte';
	import FilterButtonAuthor from '$lib/filter-button-author.svelte';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	let resultsPage = $state(data.resultsPage);
	let books = $state(data.books);
	let totalPages = data.totalPages;
	let author = $state(data.author);

	// $effect means this anonymous function will be called every time resultsPage or author is updated
	$effect(async () => { // https://svelte.dev/docs/svelte/$effect
		books = (await getBooks(resultsPage, author)).books;
	})
</script>
<h1>Blog</h1>

<noscript>
	JAVASCRIPT DISABLED
</noscript>

<!-- bind: allows PaginatedView to update the value of resultsPage -->
<FilterButtonAuthor bind:author={author} authors={data.authors} authorsPage={data.authorsPage}/>

<PaginatedView bind:pageNr={resultsPage} name="results" totalPages={totalPages} />
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
	table {
		margin-top: 2em;
	}

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