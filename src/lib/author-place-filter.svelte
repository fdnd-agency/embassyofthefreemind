<script>
    let { value = $bindable(), options, name, hideFn } = $props();

    // Normally, pressing the arrow keys automatically *choses* an option, but this function makes sure it focusses instead.
    function handleKey(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
            event.preventDefault();
            event.target.previousElementSibling?.previousElementSibling?.focus(); // skip the label
        } else if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
            event.preventDefault();
            event.target.nextElementSibling?.nextElementSibling?.focus(); // skip the label
        }
    }
</script>

<div id="filter-author-form">
    <div id="author-filter-list">
        {#each options as option}
            <input
                form="filter-form"
                class="author-radio"
                value={option.id}
                id="{name}-{option.id}"
                type="radio"
                {name}
                bind:group={value}
                onchange={hideFn}
                onkeydown={handleKey}
            />
            <label class="author-label" for="{name}-{option.id}">{option.label} ({option.count})</label>
        {/each}
    </div>

    <noscript><button class="btn btn-primary" form="filter-form" type="submit">Filter</button></noscript>
</div>

<style>

    #filter-author-form {
        overflow-x: auto;
    }
    
    #author-filter-list {
        display: flex;
        flex-wrap: wrap;
    }

    .author-radio {
        width: 0;
        height: 0;
        opacity: 0;
    }

    .author-label {
        cursor: pointer;
        flex-basis: 18em;
        flex-grow: 0.5;
    }

    input:focus + label {
        outline: 1px solid black;
    }

    #author-filter-list {
        width: 65em;
        max-width: calc(95vw - 4em);
    }
</style>