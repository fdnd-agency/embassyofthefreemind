<script>
    import FilterGroup from "./FilterGroup.svelte";
    export let summary
</script>

<aside>
    <span>Filters</span>
    <ul>
        <FilterGroup 
            summary="Digitalised"
            optionsList={["Yes", "No"]}
        />
        <FilterGroup 
        summary="Year"
        optionsList={["15th century", "16th century", "17th century"]}
        />
        <FilterGroup 
        summary="Author"
        optionsList={["author1", "author2", "author3"]}
        />
        <FilterGroup 
        summary="Place of publication"
        optionsList={["Amsterdam", "The Hague", "Rotterdam"]}
        />
    </ul>
</aside>
<style>
    aside {
        width: 15em;
        height: auto;
        background-color: var(--tertiaryBackgroundColor);
        padding: 1em;
    }

    li, ul {
        padding: 5px;
    }

    summary, span {
        color: var(--primaryColor);
        font-weight: var(--fontWeightBold);
        padding: 5px;
    }

    summary {
        border-top: var(--borderSoft);
    }

    p {
        padding: 5px;
    }
</style>