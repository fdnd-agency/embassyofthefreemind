<script>
    import AuthorPlaceFilterSmall from '$lib/filters/author-place-filter-small.svelte';
    import CurrentFilters from '$lib/filters/current-filters.svelte';
    import PopupMobile from '$lib/popup-mobile.svelte';
    import DigitalizedFilter from '$lib/filters/digitalized-filter.svelte';
    import YearFilter from '$lib/filters/year-filter.svelte';
    import PaginatedView from '$lib/filters/paginated-view.svelte';
  import Info from '$lib/info.svelte';

    let { filter = $bindable(), authors, totalAuthors, authorsPage, places, totalPlaces, placesPage, previewFilters } = $props();
</script>

<div class="small-screen-only">
    <div>
    <p class="summary">Filters</p>
        <ul class="filters-small">
            <li>
                <PopupMobile name="Digitalized">
                    {#snippet header()}
                        <div class="digitalized-info">
                            <Info>
                                The core collection of 5,000 old prints and 300 manuscripts from the 15th to the 18th century is being digitized and is already partly available online worldwide. The digitization is made possible by bestselling author Dan Brown and the Prins Bernhard Cultuurfonds.
                            </Info>
                        </div>
                    {/snippet}
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

    .digitalized-info {
        margin-left: 0.5rem;
        margin-right: auto;
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