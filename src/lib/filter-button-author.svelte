<script>
    import { authorsURL } from "$lib";
    import PaginatedView from "./paginated-view.svelte";

    /** @type {import('./$types').PageData} */
    let { author = $bindable(), authors, authorsPage, filterAuthor } = $props();
    let isModalOpen = $state(false);

    function closeModal() {
        isModalOpen = false;
    }

    function handleKey(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            event.target.previousElementSibling?.previousElementSibling?.focus();
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            event.target.nextElementSibling?.nextElementSibling?.focus();
        }
    }

    $effect(async () => {
        const resAuthors = await fetch(authorsURL + '&page=' + authorsPage);
        const dataAuthors = await resAuthors.json();
        authors = dataAuthors.filter;
    })
</script>
<div class="dropdown">
    <div tabindex="0" role="button">More...</div>
    <div
    tabindex="0"
    class="dropdown-content card card-compact z-[1] w-64 p-2 shadow">
    <div class="card-body">
        <PaginatedView name="authors" bind:pageNr={authorsPage} totalPages="TODO"/>
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
                        onchange={closeModal}
                        onkeydown={handleKey}
                    />
                    <label class="author-label" for="author-{authorOption.id}">{authorOption.label} ({authorOption.count})</label>
                {/each}
            </div>

            <noscript><button type="submit">Filter</button></noscript>
        </form>
    </div>
    </div>
</div>
<style>
    .card-body {
        max-width: fit-content;
        background-color: var(--secondaryBackgroundColor);
        position: absolute;
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

    label {
        cursor: pointer;
        width: 33%;
    }

    input:focus + label {
        outline: 1px solid black;
    }

    form {
        margin: 2em 0;
    }

    #author-filter-list {
        width: 65em;
    }
</style>

<noscript>
    <style>
        .author-radio:checked + .author-label {
            color: red;
        }
    </style>
</noscript>