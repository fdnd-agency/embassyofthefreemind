<script>
    import { authorsURL } from "$lib";
    /** @type {import('./$types').PageData} */
    let { authors, authorsPage, filterAuthor } = $props();

    let form; // the form element, sothat it can be submitted from code

    async function updateAuthorsPage() {
        const resAuthors = await fetch(authorsURL + '&page=' + authorsPage);
        const dataAuthors = await resAuthors.json();
        authors = dataAuthors.filter;
    }

    async function nextAuthorsPage(event) {
        authorsPage++;
        updateAuthorsPage();
        event.preventDefault();
    }

    async function previousAuthorsPage(event) {
        authorsPage--;
        updateAuthorsPage();
        event.preventDefault();
    }

    function submitForm() {
        form.submit();
    }

    function clearAuthorFilter() {
        filterAuthor = null;
        submitForm();
    }
</script>
<a href="/digital-catalog">Clear</a>

<details>
    <summary>Authors</summary>
    <form action="/digital-catalog" bind:this={form}>
        <div id="author-filter-list">
            {#each authors as author}
                <input
                    class="author-radio"
                    value={author.id}
                    id="author-{author.id}"
                    type="radio"
                    name="author"
                    onchange={submitForm}
                />
                <label class="author-label" for="author-{author.id}">{author.label} ({author.count})</label>
            {/each}
        </div>

        <!-- This contains the current authors page and will be sent to the server when the form is submitted -->
        <input type="hidden" name="authors_page" value={authorsPage}>

        <input type="submit" name="authors_page_action" value="previous" disabled={authorsPage <= 1} onclick={previousAuthorsPage}>
        <input type="submit" name="authors_page_action" value="next" onclick={nextAuthorsPage}>

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