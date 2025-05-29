<script>
    let { filter = $bindable(), clearCentury } = $props();

    function clearDigitalized() {
        filter.digitalized = false;
    }

    function clearYear() {
        filter.startYear = null;
        filter.endYear = null;
        clearCentury();
    }

    function clearAuthor() {
        filter.author = null;
    }

    function clearPlace() {
        filter.place = null;
    }
</script>

{#if filter.digitalized}
    <button onclick={clearDigitalized} class="js-only badge btn-primary" type="button">X Digitalized</button>
{/if}

{#if filter.startYear && filter.endYear}
    {#if filter.startYear % 100 == 0 && filter.endYear % 100 == 0}
        <button onclick={clearYear} class="js-only badge btn-primary" type="button">X {filter.endYear / 100}th century</button>
    {:else}
        <button onclick={clearYear} class="js-only badge btn-primary" type="button">X {filter.startYear}-{filter.endYear}</button>
    {/if}
{/if}

{#if filter.author}
    <button onclick={clearAuthor} class="js-only badge btn-primary" type="button">X {filter.author}</button>
{/if}

{#if filter.place}
    <button onclick={clearPlace} class="js-only badge btn-primary" type="button">X {filter.place}</button>
{/if}

<style>
    .current-filter {
        background-color: var(--primaryColor);
        color: var(--navigationTextColor);
        text-align: center;
    }
</style>