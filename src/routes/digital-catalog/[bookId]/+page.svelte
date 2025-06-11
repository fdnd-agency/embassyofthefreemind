<!-- +page.svelte -->
<script>
    import BookList from '$lib/book-list.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
	let book = data.book;
</script>

<main>
	<h1>{book.title}</h1>

	<p><strong>Auteur:</strong> {book.auteur || '-'}</p>
	<p><strong>Jaar:</strong> {book.jaar || '-'}</p>
	<p><strong>Plaats van uitgave:</strong> {book.plaats_van_uitgave || '-'}</p>
	<p><strong>Redacteur:</strong> {book.redacteur || '-'}</p>
	<p><strong>Drukker:</strong> {book.drukker || '-'}</p>
	<p><strong>Signatuur:</strong> {book.signatuur || '-'}</p>
	<p><strong>Status:</strong> {book.status || '-'}</p>

	{#if book.description}
		<h2>Beschrijving</h2>
		<p>{book.description}</p>
	{/if}
<BookList />
	{#if book.asset?.length}
		<h2>Afbeeldingen</h2>
		{#each book.asset as item}
			<img src={item.url} alt={item.description || 'Boek afbeelding'} />
		{/each}
	{/if}
</main>
