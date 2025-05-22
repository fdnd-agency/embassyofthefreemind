<script>
    import Authors from '$lib/authors.svelte';
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
    Filters
    <ul class="filters-small">
        <li>
            <label for="todo" class="btn">Digitized</label>
        </li>
        <li>
            <label for="todo" class="btn">Year</label>
        </li>
        <li>
            <!-- <input type="checkbox" id="authors-checkbox-small" bind:checked={isPopupOpen}>
            <label for="authors-checkbox-small" class="btn">Author</label>
            <div class="collapsable">
                <div class="authors-header-small">
                    <h2>Authors</h2>
                    <PaginatedView name="authors-small" bind:pageNr={authorsPage} totalResults={totalAuthors} perPage=66/>
                    <label for="authors-checkbox-small" class="btn">X</label>
                </div>
                <div class="scrollbox">
                    <Authors bind:author={author} {authors} {totalAuthors} {authorsPage} hideFn={closePopup}/>
                </div>
            </div> -->
            <label for="my_modal_6" class="btn">Author</label>

            <input type="checkbox" id="my_modal_6" class="modal-toggle" bind:checked={isPopupOpen}/>
            <div class="modal" role="dialog">
            <div class="modal-box">
                <div class="authors-header-small">
                    <h2>Authors</h2>
                    <PaginatedView name="authors-small" bind:pageNr={authorsPage} totalResults={totalAuthors} perPage=66/>
                    <label for="my_modal_6" class="btn">X</label>
                </div>
                <div class="scrollbox">
                    <Authors bind:author={author} {authors} {totalAuthors} {authorsPage} hideFn={closePopup}/>
                </div>
                <div class="modal-action">
                </div>
            </div>
            </div>
        </li>
        <li>
            <label for="todo" class="btn">Place</label>
        </li>
    </ul>
    {#if author}
    <noscript>
        <p class="current-filter">{author}</p>
    </noscript>
    <button class="js-only btn btn-primary" onclick={clearAuthor}>x {author}</button>
{/if}
</div>

<style>
    input[type="checkbox"] {
        width: 0;
        opacity: 0;
    }

    .modal {
        justify-items: unset;
        display: unset;
    }

    .modal-box {
        width: 100vw;
        height: 80vh;
        max-width: none;
        border-radius: 0;
        top: 20vh;
        position: fixed;
    }

    .collapsable {
        display: none;
        position: fixed;
        top: 20vh;
        left: 0;
        width: 100vw;
        height: 80vh;
        padding: 1em 5vw;
        background-color: var(--backgroundColor);
    }

    .authors-header-small {
        display: flex;
        justify-content: space-between;
    }

    .scrollbox {
        height: calc(80vh - 8em);
        overflow-y: auto;
        overscroll-behavior-y: contain;
    }

    input:checked ~ .collapsable {
        display: block;
    }

    h2 {
        font-size: xx-large;
        background-color: var(--backgroundColor);
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
		}
    }
</style>