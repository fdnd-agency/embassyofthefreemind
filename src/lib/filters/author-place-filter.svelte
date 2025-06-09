<script>
    let { value = $bindable(), options, name, hideFn, hasButton = true } = $props();
    let id = $props.id();

    // Normally, pressing the arrow keys automatically *choses* an option, but this function makes sure it focusses instead.
    function handleKey(event) {
        console.log('here')
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            event.target.parentElement?.previousElementSibling?.firstElementChild?.focus();
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            event.target.parentElement?.nextElementSibling?.firstElementChild?.focus();
        }
    }
</script>

<div id="filter-author-form">
    <div id="author-filter-list">
        {#each options as option}
            <div class="option">
                <input
                    form="filter-form"
                    class="author-radio"
                    value={option.id}
                    id="{name}-{option.id}-{id}"
                    type="radio"
                    {name}
                    bind:group={value}
                    onchange={hideFn}
                    onkeydown={handleKey}
                />
                <label class="author-label" for="{name}-{option.id}-{id}">{option.label} ({option.count})</label>
            </div>
        {/each}
    </div>

    {#if hasButton}
        <noscript><button class="btn btn-primary" form="filter-form" type="submit">Filter</button></noscript>
    {/if}
</div>

<style>

    #filter-author-form {
        overflow-x: auto;
    }
    
    #author-filter-list {
        display: flex;
        flex-wrap: wrap;
    }
    
    .option {
        flex-basis: 18rem;
        flex-grow: 0.5;
    }

    .author-label {
        cursor: pointer;
    }

    #author-filter-list {
        width: 65rem;
        max-width: calc(95vw - 4rem);
    }
</style>