<script>
    /** @type {import('./$types').PageData} */
	export let authors;

    function applyFilter(event) {
        // TODO: fetch api, update authors
    }
</script>
<a href="/digital-catalog">Clear</a>
<form action="/digital-catalog">
    <div id="author-filter-list">
        {#each authors as author}
            <input class="author-radio" value={author.id} id="author-{author.id}" type="radio" name="author"/>
            <label class="author-label" for="author-{author.id}">{author.label} ({author.count})</label>
        {/each}
    </div>
    <button type="submit">Filter</button>
</form>

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

    .author-label {
        cursor: pointer;
    }
</style>