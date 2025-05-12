<script>
    /** @type {import('./$types').PageData} */
    // name must be unique. It is used for the no-js version to ensure that different instances of this component don't conflict.
    // preservedFields is a object containing the url search parameters that should be preserved when navigating through the pages.
    let { pageNr = $bindable(), totalPages, name, preservedFields = {} } = $props(); // https://svelte.dev/docs/svelte/$bindable

    async function nextPage(event) {
        event.preventDefault();
        pageNr++;
    }

    async function previousPage(event) {
        event.preventDefault();
        pageNr--;
    }
</script>

<div>{pageNr}/{totalPages}</div>
<form action="/digital-catalog">
    {#each Object.entries(preservedFields) as [name, value]}
        <input type="hidden" name={name} value={value}>
    {/each}
    <input type="hidden" name="{name}-page" value={pageNr}>
    <input type="submit" name="{name}-page-action" value="previous" onclick={previousPage} disabled={pageNr <= 1}>
    <input type="submit" name="{name}-page-action" value="next" onclick={nextPage} disabled={pageNr >= totalPages}>
</form>