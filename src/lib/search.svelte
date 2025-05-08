<script>
    let { searchTerm = $bindable() } = $props();
</script>

<form action="/digital-catalog">
    <input
        name="q"
        type="search"
        placeholder="search..."
        bind:value={searchTerm}
    />
    <noscript>
        <button type="submit">Search</button>
    </noscript>
</form>

<style>
    input { /* placeholder */
        border: 1px solid black;
        border-radius: 3px;
    }
</style>