<script>
    import AuthorPlaceFilterSmall from '$lib/author-place-filter-small.svelte';
    import CurrentFilters from '$lib/current-filters.svelte';

    let { filter = $bindable(), authors, totalAuthors, authorsPage, places, totalPlaces, placesPage } = $props();
</script>

<div class="small-screen-only">
    <div>
    <p class="summary">Filters</p>
        <ul class="filters-small">
            <li>
                <label for="filter-digitized" class="btn">Digitized</label>
                <input type="checkbox" id="filter-digitized">
            </li>
            <li>
                <label for="filter-year" class="btn">Year</label>
                <input type="checkbox" id="filter-year">
            </li>
            <li>
                <AuthorPlaceFilterSmall bind:value={filter.author} options={authors} totalOptions={totalAuthors} pageNr={authorsPage} name="author" apiName="auteur"/>
            </li>
            <li>
                <AuthorPlaceFilterSmall bind:value={filter.place} options={places} totalOptions={totalPlaces} pageNr={placesPage} name="place" apiName="plaats_van_uitgave"/>
            </li>
        </ul>
    </div>
    <CurrentFilters bind:filter />
</div>

<style>
    ul {
        padding-left: 2px;
    }

    input[type="checkbox"] {
        width: 0;
        opacity: 0;
    }

    label {
        margin: 2px 0;
    }

    li:has(input[type="checkbox"]:focus) label {
        outline: var(--outline);
    }

    .small-screen-only {
		display: none;
	}

	.filters-small {
		display: flex;
		gap: 1em;
		max-width: 90vw;
		overflow-x: auto;
	}
    @media only screen and (max-width: 800px) {
		.small-screen-only {
			display: initial;
            display: flex;
            flex-direction: column;
            gap: 1.5em;
		}
    }
</style>