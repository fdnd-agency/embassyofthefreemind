<script>
    /** @type {import('./$types').PageData} */
    // name must be unique. It is used for the no-js version to ensure that different instances of this component don't conflict.
    let { pageNr = $bindable(), totalResults, name, perPage } = $props();

    let totalPages = $derived(Math.ceil(totalResults / perPage) || 1); // math.ceil rounds up

    async function nextPage(event) {
        event.preventDefault();
        pageNr++;
    }

    async function previousPage(event) {
        event.preventDefault();
        pageNr--;
    }
</script>

<div class="pagination-form">
    <input id="{name}-previous" form="main-form" class="btn" type="submit" name="{name}-page-action" value="previous" onclick={previousPage} disabled={pageNr <= 1}>
    <label for="{name}-previous">
        <img src="/icon2.svg" alt="previous-{name}-page">
    </label>
    <div class="pagination-view">
        <input class="page-nr" form="main-form" type="number" name="{name}-page" bind:value={pageNr} max={totalPages}>
        <span>/</span>
        {totalPages}
    </div>
    <input id="{name}-next" form="main-form" class="btn" type="submit" name="{name}-page-action" value="next" onclick={nextPage} disabled={pageNr >= totalPages}>
    <label for="{name}-next">
        <img src="/icon.svg" alt="next-{name}-page">
    </label>
</div>

<style>
    .pagination-form {
        display: flex;
        margin-bottom: 1em;
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