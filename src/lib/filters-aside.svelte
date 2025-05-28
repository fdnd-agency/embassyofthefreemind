<script>
    import FilterButtonAuthor from '$lib/filter-button-author.svelte';

    let { author = $bindable(), authors, totalAuthors, authorsPage } = $props();
    function clearAuthor() {
        author = null;
    }
</script>
<div class="big-screen-only">

<aside>
    <p class="summary">Filters</p>
    {#if author}
        <noscript>
            <p class="current-filter">{author}</p>
        </noscript>
        <button class="js-only badge btn-primary" onclick={clearAuthor} aria-label="remove author filter">                                
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
            </svg> Author: 
            <span class="bold">{author}</span>
        </button>    {/if}
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
                <FilterButtonAuthor id="aside" bind:author={author} {authors} {totalAuthors} {authorsPage}/>
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
</div>

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

    @media only screen and (max-width: 800px) {
		.big-screen-only {
			display: none;
		}
	}
</style>