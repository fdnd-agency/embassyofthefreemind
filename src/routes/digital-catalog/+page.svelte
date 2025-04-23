<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>
<h1>Blog</h1>
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
	
</style>