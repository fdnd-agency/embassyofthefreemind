<script>
	import { getBooks } from "$lib";
	import Headercomponent from "$lib/header.svelte";
	import Breadcrumbs from "$lib/breadcrumbs.svelte";
	import Search from "$lib/filters/search.svelte";
	import FiltersAside from "$lib/filters/filters-aside.svelte";
	import BookList from "$lib/book-list.svelte";
	import PaginatedView from "$lib/filters/paginated-view.svelte";
	import Footer from "$lib/footer.svelte";

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	let resultsPage = $state(data.resultsPage);
	let searchTerm = $state(data.searchTerm);
	let totalResults = $state(data.totalResults);

	// $effect means this anonymous function will be called every time resultsPage or searchTerm is updated
	$effect(async () => {
		// https://svelte.dev/docs/svelte/$effect
		const res = await getBooks(resultsPage, searchTerm);
		totalResults = res.totalResults;
	});
</script>

<noscript> JAVASCRIPT DISABLED </noscript>

<main>
	<Breadcrumbs />
	<form id="main-form">
		<!-- All filter inputs and submit buttons should connect to this form using form="main-form" -->
	</form>
	<div class="search-container">
		<Search bind:searchTerm />
	</div>
	<div class="catalog-container">
		<div class="page-container">
			<p class="results">
				<span class="total-results">{totalResults}</span>results
			</p>
			<hr />
			<BookList booksData={data.books} />
			<div class="paginated-view">
				<PaginatedView
					name="results"
					bind:pageNr={resultsPage}
					{totalResults}
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
		margin-top: 5rem;
	}

	.search-container {
		background-color: var(--secondaryBackgroundColor);
		height: 5em;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 3rem;
	}

	.catalog-container {
		display: flex;
		margin-top: 0;
	}

	.page-container {
		display: flex;
		flex-direction: column;
		padding-left: 2rem;
	}

	.total-results {
		font-weight: var(--fontWeightBold);
		padding-right: 5px;
	}

	.paginated-view {
		display: flex;
		justify-content: end;
		margin: 1rem;
	}
</style>
