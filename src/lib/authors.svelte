<script>
    import { authorsURL } from "$lib";
    let { author = $bindable(), authors, totalAuthors, authorsPage, hideFn } = $props();

    let id = $props.id();

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

    $effect(async () => {
        if (parseInt(authorsPage)) {
            const resAuthors = await fetch(authorsURL + '&page=' + authorsPage);
            const dataAuthors = await resAuthors.json();
            authors = dataAuthors.filter;
        }
    });
</script>

<div id="filter-place-form">
    <div id="author-filter-list">
        {#each authors as authorOption}
            <input
                form="main-form"
                class="author-radio"
                value={authorOption.id}
                id="author-{authorOption.id}-{id}"
                type="radio"
                name="author"
                bind:group={author}
                onchange={hideFn}
                onkeydown={handleKey}
            />
            <label class="author-label" for="author-{authorOption.id}-{id}">{authorOption.label} ({authorOption.count})</label>
        {/each}
    </div>

    <noscript><button class="btn btn-primary" type="submit">Filter</button></noscript>
</div>

<style>

    #filter-place-form {
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