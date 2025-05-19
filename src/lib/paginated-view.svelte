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

<form action="/digital-catalog">
    <input class="btn" type="hidden" name="{name}-page" value={pageNr} form="filter-place-form">
    <input class="btn" type="submit" name="{name}-page-action" value="previous" onclick={previousPage} disabled={pageNr <= 1} form="filter-place-form">
    <div class="pagination-view">{pageNr}<span>/</span>{totalPages}</div>
    <input class="btn" type="submit" name="{name}-page-action" value="next" onclick={nextPage} disabled={pageNr >= totalPages} form="filter-place-form">
</form>

<style>
    form {
        float: right;
        display: flex;
        margin-bottom: 1em;
        align-items: center;
    }

    span, .pagination-view {
        padding: 10px;
    }
</style>