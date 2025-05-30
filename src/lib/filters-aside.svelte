<script>
    import FilterGroup from "./FilterGroup.svelte";
    import FilterButtonAuthor from '$lib/filter-button-author.svelte';
    import CurrentFilters from "./current-filters.svelte";
    import OptionsList from "./OptionsList.svelte";

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
                <OptionsList bind:value={filter.digitalized} name="digitalized" options={[
                    {
                        value: false,
                        label: `All (${previewFilters.digitalized[0].count})`
                    },
                    {
                        value: true,
                        label: `Digitalized (${previewFilters.digitalized[1].count})`
                    }
                ]}/>
            </details>
        </li>
        <li>
            <details>
                <summary>Year</summary>
                <OptionsList
                name="century"
                onchange={filterByCentury}
                bind:value={century}
                options={previewFilters.centuries.map(([century, count]) => ({
                    value: century,
                    label: `${century}th century (${count})`
                }))} />
                <input onchange={clearCentury} type="number" form="filter-form" class="year-input" bind:value={filter.startYear} name="start-year">
                -
                <input onchange={clearCentury} type="number" form="filter-form" class="year-input" bind:value={filter.endYear} name="end-year">
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