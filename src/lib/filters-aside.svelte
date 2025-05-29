<script>
    import FilterGroup from "./FilterGroup.svelte";
    import FilterButtonAuthor from '$lib/filter-button-author.svelte';

    let { filter = $bindable(), previewFilters, totalAuthors, authorsPage } = $props();

    function clearAuthor() {
        filter.author = null;
    }

    let century = $state(null);

    function filterByCentury() {
        filter.startYear = (century-1) * 100;
        filter.endYear = century * 100;
    }
</script>
<div class="big-screen-only">

<aside>
    <p class="summary">Filters</p>
    {#if filter.author}
        <noscript>
            <p class="current-filter">{filter.author}</p>
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
        </button>
    {/if}
    <ul>
        <li>
            <details>
                <summary>Digitalized</summary>
                <p>Only show digitalized books.</p>
                <input bind:group={filter.digitalized} value={false} type="radio" name="digitalized" id="digitalized-off">
                <label for="digitalized-off">All ({previewFilters.digitalized[0].count})</label>
                <input bind:group={filter.digitalized} value={true} type="radio" name="digitalized" id="digitalized-on">
                <label for="digitalized-on">Digitalized ({previewFilters.digitalized[1].count})</label>
            </details>
        </li>
        <li>
            <details>
                <summary>Year</summary>
                <ul>
                {#each previewFilters.centuries as [loopCentury, count]}
                    <li>
                        <input bind:group={century} onchange={filterByCentury} value={loopCentury} type="radio" name="century" id="century-{loopCentury}">
                        <label for="century-{loopCentury}">{loopCentury}th century ({count})</label>
                    </li>
                    {/each}
                </ul>
            </details>
        </li>
        <FilterGroup 
        summary="Author"
        optionsList={["author1", "author2", "author3"]}
        />
        <FilterGroup 
        summary="Place of publication"
        optionsList={["Amsterdam", "The Hague", "Rotterdam"]}
        />
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