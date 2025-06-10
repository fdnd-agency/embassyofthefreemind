<script>
    let { searchTerm = $bindable() } = $props();

    function doNothing(event) {
        event.preventDefault();
    }
</script>

<div class="search input">
    <input
        form="filter-form"
        name="q"
        type="search"
        placeholder="Search here..."
        bind:value={searchTerm}
    />
        <button onclick={doNothing} type="submit" form="filter-form" aria-label="search"><enhanced:img src="$lib/static/search-icon.svg" alt="search"></button>
</div>

<style>
    .search {
        border-radius: 2px;
        width: 30rem;
        height: 2.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input { /* placeholder */
        outline: none;
        width: calc(100% - 1rem);
        border-right: var(--borderSoft);
        padding-right: 0.5rem;
        margin-right: 1rem;
    }

    button {
        width: 1rem;
    }
</style>