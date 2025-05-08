<script>
	import FilterButtonUitgaveplaats from "$lib/filter-button-uitgaveplaats.svelte";
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

<h1>Blog</h1>

<FilterButtonUitgaveplaats publicationPlaces={data.publicationPlaces} />

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
				<td>{book.publicationPlace}</td>
			</tr>
		{/each}
	</tbody>
</table>
