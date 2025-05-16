<script>
  	import { getBooks } from '$lib';
	import FiltersAside from '$lib/filters-aside.svelte';
  	import PaginatedView from '$lib/paginated-view.svelte';
	import Footer from '$lib/footer.svelte';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	let resultsPage = $state(data.resultsPage);
	let books = $state(data.books);
	let totalPages = data.totalPages;

	// $effect means this anonymous function will be called every time resultsPage is updated
	$effect(async () => { // https://svelte.dev/docs/svelte/$effect
		books = (await getBooks(resultsPage)).books;
	})
</script>
<noscript>
	JAVASCRIPT DISABLED
</noscript>
<div class="catalog-container">
	<!-- bind: allows PaginatedView to update the value of resultsPage -->
	<FiltersAside />
	<div class="page-container">
		<PaginatedView bind:pageNr={resultsPage} name="results" totalPages={totalPages} />
		<hr/>
		<table class="table-zebra">
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
	</div>
</div>
<Footer />

<style>
	.catalog-container {
		display: flex;
		margin: 3em;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		padding: 2em;
	}
	table {
		margin-top: 1em;
	}
	table, td, th {
		border: none;
		border-collapse: collapse;
		width: 65em;
	}
	thead, thead tr, th {
		background-color: var(--secondaryBackgroundColor);
	}

	th {
		text-align: left;
	}

	td {
		padding-right: 1em;
	}
</style>