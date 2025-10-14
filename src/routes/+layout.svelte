<script>
  import favicon from "$lib/assets/favicon.svg";
  import NavBar from "$lib/components/NavBar.svelte";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<NavBar />

{@render children?.()}

<style>
  :root {
    --font-body: "Inter", sans-serif;
    background-color: rgb(200, 200, 200);
  }
  :global(body) {
    margin: 0;
    padding: 0;
  }
</style>
