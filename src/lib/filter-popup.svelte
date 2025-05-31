<script>
    import AuthorPlaceFilter from "$lib/author-place-filter.svelte";
    import PaginatedView from "$lib/paginated-view.svelte";
    import OptionsList from "$lib/OptionsList.svelte";
    import { getFilterOptions } from "$lib";

    /** @type {import('./$types').PageData} */
    let { value = $bindable(), name, apiName, options, totalOptions, pageNr } = $props();
    let isDropdownOpen = $state(false);

    function closeDropdown() {
        isDropdownOpen = false;
    }

    $effect(async () => {
        if (parseInt(pageNr)) {
            const res = await getFilterOptions(apiName, 66, pageNr)
            options = res.options;
        }
    });
</script>
<div>
    <input type="checkbox" id="{name}-filter-more" bind:checked={isDropdownOpen}/>
    <label for="{name}-filter-more" class="filter-more-label" aria-label="More filters">More...</label>
    <div class="card card-compact z-[1] w-64 p-2 ">
        <div class="card-body">
            <div class="filter-header">
                <PaginatedView name="{name}s" bind:pageNr totalResults={totalOptions} perPage=66/>
                <label for="{name}-filter-more" class="btn" aria-label="Close popup">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-4 w-4 stroke-current">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </label>
            </div>

            <AuthorPlaceFilter bind:value {options} {name} hideFn={closeDropdown} />
        </div>
    </div>
</div>
<style>
    input {
        width: 0;
        opacity: 0;
    }

    .card {
        display: none;
    }

    .filter-more-label {
        cursor: pointer;
    }

    input:focus + .filter-more-label {
        outline: var(--outline);
    }

    .filter-more-label:hover {
        text-decoration: underline;
    }

    input:checked ~ .card {
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