<script>
    /** @type {import('./$types').PageData} */
    import { nRows } from '$lib';
    // name must be unique. It is used for the no-js version to ensure that different instances of this component don't conflict.
    let { pageNr = $bindable(), totalResults, name, preserveFields } = $props();

    let totalPages = $derived(Math.ceil(totalResults / nRows)); // math.ceil rounds up

    async function nextPage(event) {
        event.preventDefault();
        pageNr++;
    }

    async function previousPage(event) {
        event.preventDefault();
        pageNr--;
    }
</script>

<div>{totalResults} results</div>
<div>{pageNr}/{totalPages}</div>
<form action="/digital-catalog">
    {#each Object.entries(preserveFields) as [name, value]}
        <input type="hidden" name={name} value={value}/>
    {/each}
    <input type="hidden" name="{name}-page" value={pageNr}>
    <input type="submit" name="{name}-page-action" value="previous" onclick={previousPage} disabled={pageNr <= 1}>
    <input type="submit" name="{name}-page-action" value="next" onclick={nextPage} disabled={pageNr >= totalPages}>
</form>