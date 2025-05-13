<script>
    /** @type {import('./$types').PageData} */
    // name must be unique. It is used for the no-js version to ensure that different instances of this component don't conflict.
    // preservedFields is an object containing the url search parameters that should be preserved when navigating through the pages.
    let { pageNr = $bindable(), totalPages, name, preservedFields = {} } = $props();

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
<!-- Object entries transforms an object into an array of key-value pairs -->
<form >
    <!-- {#each Object.entries(preservedFields) as [name, value]} -->
        <!-- <input type="hidden" name={name} value={value}> -->
    
    <input type="hidden" name="{name}-page" value={pageNr} form="filter-place-form">
    <input type="submit" name="{name}-page-action" value="previous" onclick={previousPage} disabled={pageNr <= 1} form="filter-place-form">
    <input type="submit" name="{name}-page-action" value="next" onclick={nextPage} disabled={pageNr >= totalPages}  form="filter-place-form">
</form>