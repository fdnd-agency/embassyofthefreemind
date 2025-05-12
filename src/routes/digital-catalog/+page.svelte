<script>
	import { getBooks } from '$lib';
  	import PaginatedView from '$lib/paginated-view.svelte';
	import FilterButtonPublicationPlace from "$lib/filter-button-publication-place.svelte";

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	let resultsPage = $state(data.resultsPage);
	let books = $state(data.books);
	let totalPages = $state(data.totalPages);
	let publicationPlace = $state(data.publicationPlace)

	// $effect means this anonymous function will be called every time resultsPage is updated
	$effect(async () => { // https://svelte.dev/docs/svelte/$effect
		const res = await getBooks(resultsPage, publicationPlace);
		books = res.books;
		totalPages = res.totalPages	
	})
</script>

<h1>Blog</h1>

<noscript>
	JAVASCRIPT DISABLED
</noscript>

<FilterButtonPublicationPlace bind:publicationPlace={publicationPlace} publicationPlaces={data.places} placesPage={data.placesPage}/>

<!-- bind: allows PaginatedView to update the value of resultsPage -->
<PaginatedView bind:pageNr={resultsPage} name="results" totalPages={totalPages} preservedFields={{place: publicationPlace}} />

<table>
	<thead>
		<tr>
			<th>Titel</th>
			<th>Auteur</th>
			<th>Publicatie jaar</th>
			<th>Plaats van publicatie</th>
		</tr>
	</thead>
	<tbody>
		{#each books as book}
			<tr>
				<td>{book.title}</td>
				<td>{book.author}</td>
				<td>{book.publicationYear}</td>
				<td>{book.publicationPlace}</td>
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