<script>
    import Authors from "$lib/authors.svelte";
    import PaginatedView from "./paginated-view.svelte";

    /** @type {import('./$types').PageData} */
    let { author = $bindable(), authors, totalAuthors, authorsPage } = $props();
    let isDropdownOpen = $state(false);

    function closeDropdown() {
        isDropdownOpen = false;
    }
</script>
<div>
    <input type="checkbox" id="author-filter-more" bind:checked={isDropdownOpen}/>
    <label for="author-filter-more">More...</label>
    <div class="card card-compact z-[1] w-64 p-2 ">
        <div class="card-body">
            <div class="filter-header">
                <PaginatedView name="authors" bind:pageNr={authorsPage} totalResults={totalAuthors} perPage=66/>
                <label for="author-filter-more" class="btn">X</label>
            </div>

            <Authors bind:author={author} {authors} {totalAuthors} {authorsPage} hideFn={closeDropdown}/>
        </div>
    </div>
</div>
<style>
    #author-filter-more {
        width: 0;
        opacity: 0;
    }

    .card {
        display: none;
    }

    #author-filter-more:checked ~ .card {
        display: block;
    }
    
    .filter-header {
        display: flex;
        justify-content: space-between;
    }

    .card-body {
        max-width: fit-content;
        width: calc(95vw - 2em);
        background-color: var(--secondaryBackgroundColor);
        position: absolute;
    }
</style>

<noscript>
    <style>
        .author-radio:checked + .author-label {
            color: red;
        }
    </style>
</noscript>