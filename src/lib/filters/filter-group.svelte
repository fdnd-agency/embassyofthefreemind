<script>
    import OptionsList from "$lib/filters/options-list.svelte";
    import FilterPopup from "$lib/filters/filter-popup.svelte";

    // name: string. Name for the inputs. Used for server-side version.
    // apiName: string. Name in the api (e.g. plaats_van_uitgave)
    // preview: First few options.
    // options: First page of options.
    let { summary, name, apiName, value = $bindable(), preview, pageNr, options, totalOptions } = $props();

    const previewOptions = preview.map(({filter, count}) => ({
        label: `${filter} (${count})`,
        value: filter
    }));
</script>
  
<details>
    <summary>{summary}</summary>
    <OptionsList
    options={previewOptions}
    bind:value
    {name}
    />
    <FilterPopup bind:value {name} {apiName} {pageNr} {options} {totalOptions} />
</details>

<style>
    summary {
        border-top: var(--borderSoft);
    }
</style>
