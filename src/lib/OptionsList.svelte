<script>
    import Option from "./Option.svelte";       
    let {options, value = $bindable(), name} = $props();
    let id = $props.id();
</script>

<ul>
    {#each options as option}
        <li>
            <input bind:group={value} type="radio" {name} id="{id}-{option.value}" value={option.value}>
            <label for="{id}-{option.value}">{option.label}</label>
        </li>
    {/each}
    <!-- <Option label="Digitalised" />
    <Option label="Year" />
    <Option label="Author" />
    <Option label="Place of Publication" /> -->
</ul>
