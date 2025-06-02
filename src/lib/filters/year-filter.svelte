<script>
    import OptionsList from "$lib/filters/options-list.svelte";

    let { startYear = $bindable(), endYear = $bindable(), preview } = $props();

    let century = $state();

    // Called when a century is clicked. Overwrites start and end year based on selected century.
    function filterByCentury() {
        startYear = (century-1) * 100;
        endYear = century * 100;
    }

    // Called when filtering by a specific year. Deselects century.
    function clearCentury() {
        century = null;
    }
</script>

<OptionsList
name="century"
onchange={filterByCentury}
bind:value={century}
options={preview.map(([century, count]) => ({
    // convert {century: 15, count: 3245} to {value: 15, label: "15th century (3245)"}
    value: century,
    label: `${century}th century (${count})`
}))} />
<input onchange={clearCentury} type="number" form="filter-form" bind:value={startYear} name="start-year">
-
<input onchange={clearCentury} type="number" form="filter-form" bind:value={endYear} name="end-year">

<style>
    input {
        width: calc(50% - 1em);
    }
</style>