<script>
    import OptionsList from "./OptionsList.svelte";
    import FilterPopup from "./filter-popup.svelte";

    let { summary, name, apiName, value = $bindable(), preview, pageNr, options, totalOptions } = $props();

    const previewOptions = preview.map(({filter, count}) => ({
        label: `${filter} (${count})`,
        value: filter
    }));
</script>
  
<li>
    <details>
        <summary>{summary}</summary>
        <OptionsList
        options={previewOptions}
        bind:value
        {name}
        />
        <FilterPopup bind:value {name} {apiName} {pageNr} {options} {totalOptions} />
    </details>
</li>

<style>
    summary {
        font-weight: var(--fontWeightBold);
    }

    li {
        padding: 5px;
    }

    summary {
        border-top: var(--borderSoft);
    }
</style>
