<script>
  import { getBooks } from '$lib';
	import Headercomponent from '$lib/Headercomponent.svelte';
  import Breadcrumbs from '$lib/breadcrumbs.svelte';
  import Search from '$lib/search.svelte';
	import FiltersAside from '$lib/filters-aside.svelte';
  import BookViewer from "$lib/book-viewer.svelte";
  import PaginatedView from '$lib/paginated-view.svelte';
  import Footer from '$lib/footer.svelte';

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

<noscript> JAVASCRIPT DISABLED </noscript>

<Headercomponent />                                     
<main>
	<Breadcrumbs/>
	<h1>Digital catalog</h1>
	<p>Discover a unique collection of books and prints full of wisdom, symbolism and free thinking. Browse through the collection, search for authors or place and date of publication and be inspired by ideas that span the ages.</p>
	<form id="main-form">
		<!-- All filter inputs and submit buttons should connect to this form using form="main-form" -->
	</form>
	<div class="search-container">
		<Search bind:searchTerm={searchTerm}/>
	</div>
	<div class="catalog-container">
		<!-- bind: allows PaginatedView to update the value of resultsPage -->
		<FiltersAside />
		<div class="page-container">
			<p class="results" ><span class="total-results">{totalResults}</span>results</p>
			<hr/>
			<table class="table-zebra">
				<thead>
					<tr>
            <th>Afbeeldingen</th>
						<th>Titel</th>
						<th>Auteur</th>
						<th>Publicatie jaar</th>
					</tr>
				</thead>
				<tbody>
					{#each books as book, i}
						<tr>
              <td>
                <div class="skeleton">
                  {#if book.bookImages}
                    <BookViewer images={book.bookImages} queryKey={"boek" + i} title={book.title} />
                  {/if}
                </div>
              </td>
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
  <Footer />
</main>

<style>
	main {
		width: 90%;
		margin: 0 auto;
		margin-top: 1em;
	}
	
	.search-container {
		background-color: var(--secondaryBackgroundColor);
		height: 5em;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 3em;
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

	table{
		z-index: -1;
	}

	table, .results, hr {
		margin-top: 1.5em;
	}

	table, td, th {
		border: none;
		border-collapse: collapse;
		width: 65em;
	}

	tbody tr:nth-of-type(even) td {
		background-color: #eee;
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

	.skeleton {
		border-radius: 0rem;
		width: 20vw;
		height: 20vw;
		animation: skeleton none;
	}
</style>