<script>
    import AuthorsFilter from '$lib/author-place-filter.svelte';
    import PaginatedView from '$lib/paginated-view.svelte';

    let { author = $bindable(), authors, totalAuthors, authorsPage } = $props();

    let isPopupOpen = $state(false);

    function closePopup() {
        isPopupOpen = false;
    }

    function clearAuthor() {
        author = null;
    }
</script>

<div class="small-screen-only">
    <div>
    <p class="summary">Filters</p>
        <ul class="filters-small">
            <li>
                <label for="filter-digitized" class="btn">Digitized</label>
                <input type="checkbox" id="filter-digitized">
            </li>
            <li>
                <label for="filter-year" class="btn">Year</label>
                <input type="checkbox" id="filter-year">
            </li>
            <li>
                <label for="my_modal_6" class="btn">Author</label>
                <input type="checkbox" id="my_modal_6" class="modal-toggle" bind:checked={isPopupOpen}/>
                <div class="modal" role="dialog">
                    <div class="modal-box">
                        <div class="authors-header-small">
                            <h3>Authors</h3>
                            <PaginatedView name="authors-small" bind:pageNr={authorsPage} totalResults={totalAuthors} perPage=66/>
                            <label for="my_modal_6" class="btn" aria-label="close popup">
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
                            <AuthorsFilter bind:author={author} {authors} {totalAuthors} {authorsPage} hideFn={closePopup}/>
                        </div>
                        <div class="modal-action"></div>
                    </div>
                </div>
            </li>
            <li>
                <label for="filter-place" class="btn">Place</label>
                <input type="checkbox" id="filter-place">
            </li>
        </ul>
    </div>
    <div class="filter-feedback">
        {#if author}
        <noscript>
            <p class="current-filter">{author}</p>
        </noscript>
        <button class="js-only badge btn-primary" onclick={clearAuthor} aria-label="remove author filter">                                
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
            </svg> Author: 
            <span class="bold">{author}</span>
        </button>
        {/if}
    </div>
</div>

<style>
    ul {
        padding-left: 2px;
    }

    input[type="checkbox"] {
        width: 0;
        opacity: 0;
    }

    label {
        margin: 2px 0;
    }

    li:has(input[type="checkbox"]:focus) label {
        outline: var(--outline);
    }

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

    .small-screen-only {
		display: none;
	}

	.filters-small {
		display: flex;
		gap: 1em;
		max-width: 90vw;
		overflow-x: auto;
	}
    @media only screen and (max-width: 800px) {
		.small-screen-only {
			display: initial;
            display: flex;
            flex-direction: column;
            gap: 1.5em;
		}
    }
</style>