<script>
    import { authorsURL } from "$lib";
    import PaginatedView from "./paginated-view.svelte";

    /** @type {import('./$types').PageData} */
    let { author = $bindable(), authors, authorsPage, filterAuthor } = $props();

    function updateAuthor(event) {
        author = event.target.value;
        console.log(author);
    }

    $effect(async () => {
        const resAuthors = await fetch(authorsURL + '&page=' + authorsPage);
        const dataAuthors = await resAuthors.json();
        authors = dataAuthors.filter;
    })
</script>
<a href="/digital-catalog">Clear</a>

<details>
    <summary>Authors</summary>
    <PaginatedView name="authors" bind:pageNr={authorsPage} totalPages="TODO"/>
    
    <form action="/digital-catalog">
        <div id="author-filter-list">
            {#each authors as author}
                <input
                    class="author-radio"
                    value={author.id}
                    id="author-{author.id}"
                    type="radio"
                    name="author"
                    onchange={updateAuthor}
                />
                <label class="author-label" for="author-{author.id}">{author.label} ({author.count})</label>
            {/each}
        </div>

        <button type="submit">Filter</button>
    </form>
</details>
{#if filterAuthor}
<div>
    <button onclick={clearAuthorFilter}>X</button>
    { filterAuthor }
</div>
{/if}

<style>
    #author-filter-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(15, 1fr);
    }

    .author-radio {
        display: none;
    }

    label {
        cursor: pointer;
    }

    form {
        margin: 2em 0;
    }

    #author-filter-list {
        border: 1px solid black;
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