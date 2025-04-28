<script>
    /** @type {import('./$types').PageData} */
	export let authors;
    export let authorsPage;

    function applyFilter(event) {
        // TODO: fetch api, update authors
    }
</script>
<a href="/digital-catalog">Clear</a>

<details>
    <summary>Authors</summary>
    <form action="/digital-catalog">
        <div id="author-filter-list">
            {#each authors as author}
                <input class="author-radio" value={author.id} id="author-{author.id}" type="radio" name="author"/>
                <label class="author-label" for="author-{author.id}">{author.label} ({author.count})</label>
            {/each}
        </div>

        <!-- This contains the current authors page and will be sent to the server when the form is submitted -->
        <input type="hidden" name="authors_page" value={authorsPage}>

        <input type="submit" name="authors_page_action" value="previous" disabled={authorsPage <= 1}>
        <input type="submit" name="authors_page_action" value="next">

        <button type="submit">Filter</button>
    </form>
</details>

<style>
    #author-filter-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(15, 1fr);
    }

    .author-radio {
        display: none;
    }

    .author-radio:checked + .author-label {
        color: red;
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