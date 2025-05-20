<script>
    import FilterButtonAuthor from '$lib/filter-button-author.svelte';

    let { author = $bindable(), authors, totalAuthors, authorsPage } = $props();

    function clearAuthor() {
        author = null;
    }
</script>
<aside>
    <span>Filters</span>
    {#if author}
        <noscript>
            <p class="current-filter">{author}</p>
        </noscript>
        <button class="js-only btn btn-primary" onclick={clearAuthor}>x {author}</button>
    {/if}
    <ul>
        <li>
            <details>
                <summary>Digitalised</summary>
                <p>WIP: Digitalised filter</p>
            </details>
        </li>
        <li>
            <details>
                <summary>Year</summary>
                <p>WIP: Year filter</p>
            </details>
        </li>
        <li>
           <details>
                <summary>Author</summary>
                <FilterButtonAuthor bind:author={author} {authors} {totalAuthors} {authorsPage}/>           
            </details> 
        </li>
        <li>
            <details>
                <summary>Place of publication</summary>
                <p>WIP: Place filter</p>
            </details>
        </li>
    </ul>
</aside>
<style>
    aside {
        width: 15em;
        height: auto;
        background-color: var(--tertiaryBackgroundColor);
        padding: 1em;
    }

    li, ul {
        padding: 5px;
    }

    summary, span {
        color: var(--primaryColor);
        font-weight: var(--fontWeightBold);
        padding: 5px;
    }

    summary {
        border-top: var(--borderSoft);
    }

    p {
        padding: 5px;
    }

    .current-filter {
        background-color: var(--primaryColor);
        color: var(--navigationTextColor);
        text-align: center;
    }
</style>