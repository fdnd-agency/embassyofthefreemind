<script>
  	import { getBooks } from '$lib';
  import FiltersAside from '$lib/filters-aside.svelte';
  	import PaginatedView from '$lib/paginated-view.svelte';
	import Search from '$lib/search.svelte';
	import Headercomponent from '$lib/Headercomponent.svelte';
	import FilterButtonAuthor from '$lib/filter-button-author.svelte';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	let resultsPage = $state(data.resultsPage);
	let books = $state(data.books);
	let searchTerm = $state(data.searchTerm);
	let totalResults = $state(data.totalResults);
	let author = $state(data.author);


	// $effect means this anonymous function will be called every time resultsPage, searchTerm or author is updated
	$effect(async () => { // https://svelte.dev/docs/svelte/$effect
		const res = await getBooks(resultsPage, searchTerm, author);
		books = res.books;
		totalResults = res.totalResults;
	})
</script>

<noscript>
	JAVASCRIPT DISABLED
</noscript>

<Headercomponent />                                     
<main>
	<form id="main-form">
		<!-- All filter inputs and submit buttons should connect to this form using form="main-form" -->
	</form>
	<div class="search-container">
		<Search bind:searchTerm={searchTerm}/>
	</div>
	<div class="catalog-container">
		<!-- bind: allows PaginatedView to update the value of resultsPage -->
		<FiltersAside bind:author={author} authors={data.authors} authorsPage={data.authorsPage}/>
		<div class="page-container">
			<p class="results" ><span class="total-results">{totalResults}</span>results</p>
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
			<div class="paginated-view">
				<PaginatedView
					name="results"
					bind:pageNr={resultsPage}
					totalResults={totalResults}
				/>
			</div>
		</div>
	</div>
</main>

<style>
	
	main {
		width: 90%;
		margin: 0 auto;
		margin-top: 3em;
	}
	.search-container {
		background-color: var(--secondaryBackgroundColor);
		height: 5em;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.catalog-container {
		display: flex;
		margin-top: 0;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		padding-left: 2em;
	}

	.total-results {
		font-weight: var(--fontWeightBold);
		padding-right: 5px;
	}
	table, .results, hr {
		margin-top: 1.5em;
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

	.paginated-view {
		display: flex;
		justify-content: end;
		margin: 1em;
	}
</style>