<script>
    import Option from "./Option.svelte";       
    let {options, value = $bindable(), name, onchange = null, hasButton = true} = $props();
    let id = $props.id();
</script>

<ul>
    {#each options as option}
        <li>
            <input {onchange} bind:group={value} type="radio" form="filter-form" {name} id="{id}-{option.value}" value={option.value}>
            <label for="{id}-{option.value}">{option.label}</label>
        </li>
    {/each}
</ul>

{#if hasButton}
    <noscript><button form="filter-form" class="btn btn-primary" type="submit">Filter</button></noscript>
{/if}