<script>
    import OptionsList from "./options-list.svelte";

    let { digitalized = $bindable(), preview } = $props();
</script>

<p>Only show digitalized books.</p>
<OptionsList bind:value={digitalized} name="digitalized" options={[
    {
        value: false,
        label: `All (${preview[1].count})`
    },
    {
        value: true,
        label: `Digitalized (${preview[0].count})`
    }
]}/>