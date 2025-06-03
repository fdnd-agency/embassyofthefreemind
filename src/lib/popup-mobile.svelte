<script>
    // `main` and `header` are snippets.
    // `main` is given a function which closes the popup when called.
    let { main, header, name } = $props();
    let id = $props.id();

    let isPopupOpen = $state(false);

    function closePopup() {
        isPopupOpen = false;
    }
</script>


<div class="popup-container">
    <label for="modal_filter_small_{id}" class="btn">{name}</label>
    <input type="checkbox" id="modal_filter_small_{id}" class="modal-toggle" bind:checked={isPopupOpen}/>
    <div class="modal" role="dialog">
        <div class="modal-box">
            <div class="authors-header-small">
                <h3>{name}</h3>
                {@render header?.()}
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
            {@render main(closePopup)}
        </div>
    </div>
</div>

<style>
    .popup-container:has(input:focus) label {
        outline: var(--outline);
    }

    .popup-container > label {
        margin: 2px 0;
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
</style>