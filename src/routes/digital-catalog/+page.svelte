<script>
  	import { getBooks } from '$lib';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	let resultsPage = $state(data.resultsPage);
	let books = $state(data.books);

	async function nextResultsPage(event) {
		event.preventDefault();
		resultsPage++;
		books = await getBooks(resultsPage);
	}

	async function previousResultsPage(event) {
		event.preventDefault();
		resultsPage--;
		books = await getBooks(resultsPage);
	}
</script>
<h1>Blog</h1>

<noscript>
	JAVASCRIPT DISABLED
</noscript>

<section id="results-nav">
	<form action="/digital-catalog">
		<!-- TODO: Add more hidden inputs containing the current filters sothat they are not removed when navigating -->
		<input type="hidden" name="results-page" value={resultsPage}>
		<input type="submit" name="results-page-action" value="previous" onclick={previousResultsPage}>
		<input type="submit" name="results-page-action" value="next" onclick={nextResultsPage}>
	</form>
</section>
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