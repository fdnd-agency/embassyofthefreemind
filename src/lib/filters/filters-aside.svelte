<script>
    import FilterGroup from "$lib/filters/filter-group.svelte";
    import CurrentFilters from "$lib/filters/current-filters.svelte";
    import OptionsList from "$lib/filters/options-list.svelte";
    import DigitalizedFilter from "$lib/filters/digitalized-filter.svelte";
    import YearFilter from "$lib/filters/year-filter.svelte";
    import Info from "$lib/info.svelte";

    let { filter = $bindable(), previewFilters, authorsPage, placesPage, authors, places, totalAuthors, totalPlaces } = $props();
</script>
<div class="big-screen-only">

<aside>
    <p class="summary">Filters</p>
    <CurrentFilters bind:filter/>
    <ul>
        <li>
            <details>
                <summary>
                    Digitalized
                    <Info>
                        The core collection of 5,000 old prints and 300 manuscripts from the 15th to the 18th century is being digitized and is already partly available online worldwide. The digitization is made possible by bestselling author Dan Brown and the Prins Bernhard Cultuurfonds.
                    </Info>
                </summary>
                <DigitalizedFilter bind:digitalized={filter.digitalized} preview={previewFilters.digitalized}/>
            </details>
        </li>
        <li>
            <details>
                <summary>Year</summary>
                <YearFilter bind:startYear={filter.startYear} bind:endYear={filter.endYear} preview={previewFilters.centuries} />
            </details>
        </li>
        <li>
            <FilterGroup
            summary="Author"
            name="author"
            apiName="auteur"
            bind:value={filter.author}
            preview={previewFilters.authors}
            pageNr={authorsPage}
            options={authors}
            totalOptions={totalAuthors}
            />
        </li>
        <li>
            <FilterGroup
            summary="Place of publication"
            name="place"
            apiName="plaats_van_uitgave"
            bind:value={filter.place}
            preview={previewFilters.places}
            pageNr={placesPage}
            options={places}
            totalOptions={totalPlaces}
            />
        </li>
    </ul>
</aside>
</div>

<style>
    aside {
        width: 15rem;
        height: auto;
        background-color: var(--tertiaryBackgroundColor);
        padding: 1rem;
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