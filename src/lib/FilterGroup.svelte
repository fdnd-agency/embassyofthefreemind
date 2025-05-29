<script>
    import OptionsList from "./OptionsList.svelte";

    let { summary, name, apiName, value = $bindable(), preview } = $props();

    const previewOptions = preview.map(({filter, count}) => ({
        label: `${filter} (${count})`,
        value: filter
    }));

    console.log(previewOptions);
</script>
  
<li>
    <details>
        <summary>{summary}</summary>
        <OptionsList
        options={previewOptions}
        bind:value
        {name}
        />
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
