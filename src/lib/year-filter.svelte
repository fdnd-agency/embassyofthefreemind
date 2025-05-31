<script>
    import OptionsList from "./OptionsList.svelte";

    let { startYear = $bindable(), endYear = $bindable(), preview } = $props();

    let century = $state();

    function filterByCentury() {
        startYear = (century-1) * 100;
        endYear = century * 100;
    }

    function clearCentury() {
        century = null;
    }
</script>

<OptionsList
name="century"
onchange={filterByCentury}
bind:value={century}
options={preview.map(([century, count]) => ({
    value: century,
    label: `${century}th century (${count})`
}))} />
<input onchange={clearCentury} type="number" form="filter-form" class="year-input" bind:value={startYear} name="start-year">
-
<input onchange={clearCentury} type="number" form="filter-form" class="year-input" bind:value={endYear} name="end-year">