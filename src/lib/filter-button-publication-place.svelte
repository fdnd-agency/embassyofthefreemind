<script>
    /** @type {import('./$types').PageData} */
    import { placesURL } from "$lib";
    import PaginatedView from "./paginated-view.svelte";
    let { publicationPlace = $bindable(), publicationPlaces, placesPage } = $props();

    $effect(async () => {
        const resPlaces = await fetch(placesURL + '&page=' + placesPage);
        const dataPlaces = await resPlaces.json();
        publicationPlaces = dataPlaces.filter;
    })
</script>

<details>
    <PaginatedView name="places" bind:pageNr={placesPage} totalPages="TODO"/>
    <form action="/digital-catalog" id="filter-place-form">
        <div id="place-filter-list">
            <!-- bind:group means that publicationPlace will be automatically updated when the user clicks on a radio input -->
            {#each publicationPlaces as place}
                <input
                    class="place-radio"
                    value={place.id}
                    id="place-{place.id}"
                    type="radio"
                    name="place"
                    bind:group={publicationPlace}
                />
                <label
                    class="place-label"
                    for="place-{place.id}"
                >
                    {place.label} ({place.count})
                </label>
            {/each}
        </div>
        <noscript>
            <button type="submit">Filter</button>
        </noscript>
    </form>
</details>

<style>
    #place-filter-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(15, 1fr);
    }

    .place-radio {
        display: none;
    }

    .place-label {
        cursor: pointer;
    }
</style>
