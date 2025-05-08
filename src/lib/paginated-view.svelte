<script>
    /** @type {import('./$types').PageData} */
    // name must be unique. It is used for the no-js version to ensure that different instances of this component don't conflict.
    let { pageNr = $bindable(), totalPages, name } = $props(); // https://svelte.dev/docs/svelte/$bindable

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
    <!-- TODO: Add more hidden inputs containing the current filters sothat they are not removed when navigating -->
    <input type="hidden" name="{name}-page" value={pageNr}>
    <input type="submit" name="{name}-page-action" value="previous" onclick={previousPage} disabled={pageNr <= 1}>
    <input type="submit" name="{name}-page-action" value="next" onclick={nextPage} disabled={pageNr >= totalPages}>
</form>