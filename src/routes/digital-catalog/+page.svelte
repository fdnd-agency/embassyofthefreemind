<script>
	import { getBooks } from "$lib";
	import PaginatedView from "$lib/paginated-view.svelte";

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	let resultsPage = $state(data.resultsPage);
	let books = $state(data.books);
	let totalPages = data.totalPages;

	// $effect means this anonymous function will be called every time resultsPage is updated
	$effect(async () => {
		// https://svelte.dev/docs/svelte/$effect
		books = (await getBooks(resultsPage)).books;
	});
</script>

<h1>Blog</h1>

<noscript> JAVASCRIPT DISABLED </noscript>

<!-- bind: allows PaginatedView to update the value of resultsPage -->
<PaginatedView bind:pageNr={resultsPage} name="results" {totalPages} />
<table>
	<thead>
		<tr>
			<th>Afbeeldingen</th>
			<th>Titel</th>
			<th>Auteur</th>
			<th>Publicatie jaar</th>
		</tr>
	</thead>
	<tbody>
			<tr>
				<td>
					{#if book.bookImages}
						<img src={book.bookImages.small} alt=""/>
					{/if}
				</td>
				<td>{book.title}</td>
				<td>{book.author}</td>
				<td>{book.publicationYear}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table,
	td,
	th {
		border: none;
		border-collapse: collapse;
	}
	thead,
	thead tr,
	th {
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

	img{
		max-width: none;
		width: 20vw;
	}
</style>
