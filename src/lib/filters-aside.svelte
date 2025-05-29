<script>
    import FilterGroup from "./FilterGroup.svelte";
    import FilterButtonAuthor from '$lib/filter-button-author.svelte';
    import CurrentFilters from "./current-filters.svelte";

    let { filter = $bindable(), previewFilters, totalAuthors, authorsPage } = $props();

    let century = $state(null);

    function filterByCentury() {
        filter.startYear = (century-1) * 100;
        filter.endYear = century * 100;
    }

    function clearCentury() {
        century = null;
    }
</script>
<div class="big-screen-only">

<aside>
    <p class="summary">Filters</p>
    <CurrentFilters bind:filter {clearCentury}/>
    <ul>
        <li>
            <details>
                <summary>Digitalized</summary>
                <p>Only show digitalized books.</p>
                <ul>
                    <li>
                        <input bind:group={filter.digitalized} value={false} type="radio" name="digitalized" id="digitalized-off" class="radio">
                        <label for="digitalized-off">All ({previewFilters.digitalized[0].count})</label>
                    </li>
                    <li>
                        <input bind:group={filter.digitalized} value={true} type="radio" name="digitalized" id="digitalized-on" class="radio">
                        <label for="digitalized-on">Digitalized ({previewFilters.digitalized[1].count})</label>
                    </li>
                </ul>
            </details>
        </li>
        <li>
            <details>
                <summary>Year</summary>
                <ul>
                {#each previewFilters.centuries as [loopCentury, count]}
                    <li>
                        <input bind:group={century} onchange={filterByCentury} value={loopCentury} type="radio" name="century" id="century-{loopCentury}" class="radio">
                        <label for="century-{loopCentury}">{loopCentury}th century ({count})</label>
                    </li>
                    {/each}
                </ul>
                <input onchange={clearCentury} type="number" class="year-input" bind:value={filter.startYear} name="start-year" id="start-year">
                -
                <input onchange={clearCentury} type="number" class="year-input" bind:value={filter.endYear} name="end-year" id="end-year">
            </details>
        </li>
        <FilterGroup 
        summary="Author"
        name="author"
        apiName="auteur"
        bind:value={filter.author}
        preview={previewFilters.authors}
        />
        <FilterGroup 
        summary="Place of publication"
        name="place"
        apiName="plaats_van_uitgave"
        bind:value={filter.place}
        preview={previewFilters.places}
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

    @media only screen and (max-width: 800px) {
		.big-screen-only {
			display: none;
		}
	}
</style>