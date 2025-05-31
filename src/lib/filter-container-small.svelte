<script>
    import AuthorPlaceFilterSmall from '$lib/author-place-filter-small.svelte';
    import CurrentFilters from '$lib/current-filters.svelte';
    import PopupMobile from '$lib/popup-mobile.svelte';
    import DigitalizedFilter from './digitalized-filter.svelte';
    import YearFilter from './year-filter.svelte';
    import PaginatedView from './paginated-view.svelte';

    let { filter = $bindable(), authors, totalAuthors, authorsPage, places, totalPlaces, placesPage, previewFilters } = $props();
</script>

<div class="small-screen-only">
    <div>
    <p class="summary">Filters</p>
        <ul class="filters-small">
            <li>
                <PopupMobile name="Digitalized">
                    {#snippet main()}
                        <DigitalizedFilter bind:digitalized={filter.digitalized} preview={previewFilters.digitalized}/>
                    {/snippet}
                </PopupMobile>
            </li>
            <li>
                <PopupMobile name="Year">
                    {#snippet main()}
                        <YearFilter bind:startYear={filter.startYear} bind:endYear={filter.endYear} preview={previewFilters.centuries} />
                    {/snippet}
                </PopupMobile>
            </li>
            <li>
                <PopupMobile name="Author">
                    {#snippet header()}
                        <PaginatedView perPage=66 name="authors" bind:pageNr={authorsPage} totalResults={totalAuthors}/>
                    {/snippet}
                    {#snippet main(closeFn)}                        
                        <AuthorPlaceFilterSmall bind:value={filter.author} options={authors} pageNr={authorsPage} name="author" apiName="auteur" {closeFn}/>
                    {/snippet}
                </PopupMobile>
            </li>
            <li>
                <PopupMobile name="Place">
                    {#snippet header()}
                        <PaginatedView perPage=66 name="places" bind:pageNr={placesPage} totalResults={totalPlaces}/>
                    {/snippet}
                    {#snippet main(closeFn)}                        
                        <AuthorPlaceFilterSmall bind:value={filter.place} options={places} pageNr={placesPage} name="place" apiName="plaats_van_uitgave" {closeFn}/>
                    {/snippet}
                </PopupMobile>
            </li>
        </ul>
    </div>
    <CurrentFilters bind:filter />
</div>

<style>
    ul {
        padding-left: 2px;
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