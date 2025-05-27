<script>
    /** @type {import('./$types').PageData} */
    import { nRows } from '$lib';
    // name must be unique. It is used for the no-js version to ensure that different instances of this component don't conflict.
    let { pageNr = $bindable(), totalResults, name, perPage } = $props();

    let totalPages = $derived(Math.ceil(totalResults / perPage) || 1); // math.ceil rounds up

    function nextPage(event) {
        event.preventDefault();
        pageNr++;
    }

    function previousPage(event) {
        event.preventDefault();
        pageNr--;
    }
</script>

<div class="pagination-form">
    <input id="{name}-previous" form="filter-form" class="btn" type="submit" name="{name}-page-action" value="previous" onclick={previousPage} disabled={pageNr <= 1}>
    <label for="{name}-previous" aria-label="previous">
        <enhanced:img src="$lib/static/icon2.svg" alt="previous-{name}-page">
    </label>
    <div class="pagination-view">
        <input class="page-nr" form="filter-form" type="number" name="{name}-page" bind:value={pageNr} max={totalPages} aria-label="page number">
        <span>/</span>
        {totalPages}
    </div>
    <input id="{name}-next" form="filter-form" class="btn" type="submit" name="{name}-page-action" value="next" onclick={nextPage} disabled={pageNr >= totalPages}>
    <label for="{name}-next" aria-label="next">
        <enhanced:img src="$lib/static/icon.svg" alt="next-{name}-page">
    </label>
</div>

<style>
    .pagination-form {
        display: flex;
        align-items: center;
    }

    span, .pagination-view {
        padding: 10px;
    }

    input[type="submit"] {
        display: none;
    }

    input:disabled + label {
        opacity: 0.3;
    }

    .page-nr {
        field-sizing: content;
        padding: 0.5em 1em;
        border: var(--borderSoft);
        border-radius: 2px;
    }

    .page-nr::-webkit-outer-spin-button,
    .page-nr::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>