<script>
    let { field = $bindable(), text, clearFunction } = $props();
    function defaultClearFunction() {
        field = null;
    }
</script>

<button onclick={clearFunction ?? defaultClearFunction} class="js-only badge btn-primary" type="button">
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
    {text ?? field}
</button>
<noscript><p>{text ?? field}</p></noscript>

<style>
    p {
        padding: 5px 1rem;
        background-color: var(--primaryColor);
        color: var(--navigationTextColor);
        text-align: center;
        width: fit-content;
    }
</style>