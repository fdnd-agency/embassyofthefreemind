<script>
    import { getFilterOptions } from '$lib';
    import PaginatedView from '$lib/filters/paginated-view.svelte';
    import AuthorPlaceFilter from '$lib/filters/author-place-filter.svelte';

    let { value = $bindable(), options, pageNr, name, apiName, closeFn } = $props();

    let id = $props.id();
    
    $effect(async () => {
        if (parseInt(pageNr)) {
            const res = await getFilterOptions(apiName, 66, pageNr);
            options = res.options;
        }
    });
</script>

<div class="scrollbox abc">
    <AuthorPlaceFilter bind:value {options} hideFn={closeFn} {name} hasButton={false}/>
</div>
<noscript><button form="filter-form" class="btn btn-primary" type="submit">Filter</button></noscript>

<style>
    .scrollbox {
        height: calc(80vh - 7em);
        overflow-y: auto;
        overscroll-behavior-y: contain;
    }
</style>

<noscript>
    <style>
        .scrollbox.abc {
            height: calc(80vh - 10em);
            margin-bottom: 1em;
        }
    </style>
</noscript>