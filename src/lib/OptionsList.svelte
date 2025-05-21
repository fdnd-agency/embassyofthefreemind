<script>
    import Option from "./Option.svelte";       
    export let list;
</script>

<div>
    {#each list as itemLabel}
    <Option label={itemLabel} />
  {/each}
    <!-- <Option label="Digitalised" />
    <Option label="Year" />
    <Option label="Author" />
    <Option label="Place of Publication" /> -->
</div>
