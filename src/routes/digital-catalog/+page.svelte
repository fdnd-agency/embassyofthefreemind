<script>
	import FilterButtonAuthor from '$lib/filter-button-author.svelte';

	/** @type {import('./$types').PageData} */
	let { data } = $props();
</script>
<h1>Blog</h1>
<FilterButtonAuthor authors={data.authors} authorsPage={data.authorsPage} filterAuthor={data.filterAuthor} />

<table>
	<tbody>
		{#each data.books as book}
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
</style>