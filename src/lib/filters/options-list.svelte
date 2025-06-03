<script>
    // `options`: List of options with a value and a label
    // `name`: Input name for server-side version
    // `onchange`: Function to execute when user clicks an option
    // `hasButton`: Should this list have a submit button in the server-side version
    let {options, value = $bindable(), name, onchange = null, hasButton = true} = $props();
    let id = $props.id();
</script>

<ul>
    {#each options as option}
        <li>
            <input {onchange} bind:group={value} type="radio" class="radio" form="filter-form" {name} id="{id}-{option.value}" value={option.value}>
            <label for="{id}-{option.value}">{option.label}</label>
        </li>
    {/each}
</ul>

{#if hasButton}
    <noscript><button form="filter-form" class="btn btn-primary" type="submit">Filter</button></noscript>
{/if}

<style>
    li {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
    }
</style>