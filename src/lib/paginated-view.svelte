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
    <!-- TODO: Add more hidden inputs containing the current filters sothat they are not removed when navigating -->
    <input class="join-item btn" type="hidden" name="{name}-page" value={pageNr}>
    <input class="join-item btn" type="submit" name="{name}-page-action" value="previous" onclick={previousPage} disabled={pageNr <= 1}>
    <div><span>{pageNr}</span>/<span>{totalPages}</span></div>
    <input class="join-item btn" type="submit" name="{name}-page-action" value="next" onclick={nextPage} disabled={pageNr >= totalPages}>
</form>

<style>
    form {
        float: right;
        display: flex;
        margin-bottom: 1em;
        align-items: center;
    }

    input, span {
        padding: 5px;
    }
</style>