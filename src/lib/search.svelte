<script>
    let { searchTerm = $bindable() } = $props();

    function doNothing(event) {
        event.preventDefault();
    }
</script>

<div class="search input">
    <input
        form="main-form"
        name="q"
        type="search"
        placeholder="Search here..."
        bind:value={searchTerm}
    />
        <button onclick={doNothing} type="submit" form="main-form"><img src="/search-icon.svg" alt="search"></button>
</div>

<style>
    .search {
        border-radius: 2px;
        width: 30em;
        height: 2.5em;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input { /* placeholder */
        outline: none;
        width: calc(100% - 1em);
        border-right: var(--borderSoft);
        padding-right: 0.5em;
        margin-right: 1em;
    }

    button {
        width: 1em;
    }
</style>