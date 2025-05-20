<script>
    import { authorsURL } from "$lib";
    import PaginatedView from "./paginated-view.svelte";

    /** @type {import('./$types').PageData} */
    let { author = $bindable(), authors, totalAuthors, authorsPage, filterAuthor } = $props();
    let isDropdownOpen = $state(false);

    function closeDropdown() {
        isDropdownOpen = false;
    }

    // Normally, pressing the arrow keys automatically *choses* an option, but this function makes sure it focusses instead.
    function handleKey(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            event.target.previousElementSibling?.previousElementSibling?.focus(); // skip the label
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            event.target.nextElementSibling?.nextElementSibling?.focus(); // skip the label
        }
    }

    $effect(async () => {
        const resAuthors = await fetch(authorsURL + '&page=' + authorsPage);
        const dataAuthors = await resAuthors.json();
        authors = dataAuthors.filter;
    })
</script>
<div>
    <input type="checkbox" id="author-filter-more" bind:checked={isDropdownOpen}/>
    <label for="author-filter-more">More...</label>
    <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
    <div class="card card-compact z-[1] w-64 p-2 ">
        <div class="card-body">
            <div class="filter-header">
                <PaginatedView name="authors" bind:pageNr={authorsPage} totalResults={totalAuthors} perPage={66}/>
                <label for="author-filter-more" class="btn">X</label>
            </div>

            <form action="/digital-catalog" id="filter-place-form">
                <div id="author-filter-list">
                    {#each authors as authorOption}
                        <input
                            class="author-radio"
                            value={authorOption.id}
                            id="author-{authorOption.id}"
                            type="radio"
                            name="author"
                            bind:group={author}
                            onchange={closeDropdown}
                            onkeydown={handleKey}
                        />
                        <label class="author-label" for="author-{authorOption.id}">{authorOption.label} ({authorOption.count})</label>
                    {/each}
                </div>

                <noscript><button class="btn btn-primary" type="submit">Filter</button></noscript>
            </form>
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

    #filter-place-form {
        overflow-x: auto;
    }
    
    #author-filter-list {
        /* display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(15, 1fr); */
        display: flex;
        flex-wrap: wrap;
    }

    .author-radio {
        width: 0;
        height: 0;
        opacity: 0;
    }

    .author-label {
        cursor: pointer;
        flex-basis: 18em;
        flex-grow: 0.5;
    }

    input:focus + label {
        outline: 1px solid black;
    }

    #author-filter-list {
        width: 65em;
        max-width: calc(95vw - 4em);
    }
</style>

<noscript>
    <style>
        .author-radio:checked + .author-label {
            color: red;
        }
    </style>
</noscript>