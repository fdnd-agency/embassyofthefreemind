<script>
    import ClearFilterButton from "./clear-filter-button.svelte";

    let { filter = $bindable(), clearCentury } = $props();

    function clearDigitalized() {
        filter.digitalized = false;
    }

    function clearYear() {
        filter.startYear = null;
        filter.endYear = null;
        clearCentury();
    }
</script>

<noscript><a href="?" class='btn'>Clear All</a></noscript>

{#if filter.digitalized}
    <ClearFilterButton text="Digitalized" clearFunction={clearDigitalized} />
{/if}

{#if filter.startYear && filter.endYear}
    <!-- if start year is divisible by 100 and end year is start year + 100, it's a century -->
    {#if filter.startYear % 100 === 0 && filter.endYear === filter.startYear + 100}
        <ClearFilterButton text="{filter.endYear / 100}th century" clearFunction={clearYear} />
    {:else}
        <ClearFilterButton text="{filter.startYear}-{filter.endYear}" clearFunction={clearYear} />
    {/if}
{/if}

{#if filter.author}
    <ClearFilterButton bind:field={filter.author} />
{/if}

{#if filter.place}
    <ClearFilterButton bind:field={filter.place} />
{/if}