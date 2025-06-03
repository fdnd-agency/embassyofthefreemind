<script>
    let { children } = $props();
</script>

<div class="info" role="button" tabindex="0" aria-label="more info">
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="info icon">
        <path d="M6.99998 12.3333C8.41447 12.3333 9.77102 11.7714 10.7712 10.7712C11.7714 9.77102 12.3333 8.41447 12.3333 6.99998C12.3333 5.58549 11.7714 4.22894 10.7712 3.22874C9.77102 2.22855 8.41447 1.66665 6.99998 1.66665C5.58549 1.66665 4.22894 2.22855 3.22874 3.22874C2.22855 4.22894 1.66665 5.58549 1.66665 6.99998C1.66665 8.41447 2.22855 9.77102 3.22874 10.7712C4.22894 11.7714 5.58549 12.3333 6.99998 12.3333ZM6.99998 13.6666C3.31798 13.6666 0.333313 10.682 0.333313 6.99998C0.333313 3.31798 3.31798 0.333313 6.99998 0.333313C10.682 0.333313 13.6666 3.31798 13.6666 6.99998C13.6666 10.682 10.682 13.6666 6.99998 13.6666ZM6.33331 6.33331V10.3333H7.66665V6.33331H6.33331ZM6.33331 3.66665H7.66665V4.99998H6.33331V3.66665Z" fill="#002646"/>
    </svg>
    <p class="explanation">
        {@render children?.()}
    </p>
</div>

<style>
    .info, svg {
        display: inline;
    }

    .explanation {
        display: none;
        position: absolute;
        background-color: var(--backgroundColor);
        max-width: 20rem;
        padding: 0.5rem;
        border: var(--borderHard);

        color: initial;
        font-weight: initial;
    }

    .info:hover .explanation, .info:focus .explanation {
        display: block;
    }
</style>
