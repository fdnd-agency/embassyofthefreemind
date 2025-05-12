<script>
    /** @type {import('./$types').PageData} */
    let {publicationPlaces, publicationPlace = $bindable() } = $props();

    function applyFilter(event) {
        // TODO: fetch api, update publicationPlaces
    }
</script>

<a href="/digital-catalog">Clear</a>
<form action="/digital-catalog">
    <div id="publicationPlace-filter-list">
        {#each publicationPlaces as place}
            <input
                class="publicationPlace-radio"
                value={place.id}
                id="publicationPlace-{place.id}"
                type="radio"
                name="publicationPlace"
            />
            <label
                class="publicationPlace-label"
                for="publicationPlace-{place.id}"
                >{place.label} ({place.count})</label
            >
        {/each}
    </div>
    <button type="submit">Filter</button>
</form>

<style>
    #publicationPlace-filter-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(15, 1fr);
    }

    .publicationPlace-radio {
        display: none;
    }

    .publicationPlace-radio:checked + .publicationPlace-label {
        color: red;
    }

    .publicationPlace-label {
        cursor: pointer;
    }
</style>
