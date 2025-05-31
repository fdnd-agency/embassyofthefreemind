<script>
    import { getFilterOptions } from '$lib';
    import PaginatedView from '$lib/paginated-view.svelte';
    import AuthorPlaceFilter from '$lib/author-place-filter.svelte';

    let { value = $bindable(), options, totalOptions, pageNr, name, apiName } = $props();

    $inspect(value)

    let id = $props.id();

    let isPopupOpen = $state(false);

    function closePopup() {
        isPopupOpen = false;
    }
    
    $effect(async () => {
        if (parseInt(pageNr)) {
            const res = await getFilterOptions(apiName, 66, pageNr);
            options = res.options;
        }
    });
</script>

<label for="modal_filter_small_{id}" class="btn">{name}</label>
<input type="checkbox" id="modal_filter_small_{id}" class="modal-toggle" bind:checked={isPopupOpen}/>
<div class="modal" role="dialog">
    <div class="modal-box">
        <div class="authors-header-small">
            <h3>Authors</h3>
            <PaginatedView name="{name}-small" bind:pageNr totalResults={totalOptions} perPage=66/>
            <label for="modal_filter_small_{id}" class="btn" aria-label="close popup">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-4 w-4 stroke-current">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </label>
        </div>
        <div class="scrollbox">
            <AuthorPlaceFilter bind:value {options} hideFn={closePopup}/>
        </div>
        <div class="modal-action"></div>
    </div>
</div>

<style>

    div.modal {
        justify-items: unset;
        display: unset;
        visibility: hidden;
    }

    .modal-box {
        width: 100vw;
        height: 80vh;
        max-width: none;
        border-radius: 0;
        top: 20vh;
        position: fixed;
    }

    .authors-header-small {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .scrollbox {
        height: calc(80vh - 9em);
        overflow-y: auto;
        overscroll-behavior-y: contain;
    }
</style>