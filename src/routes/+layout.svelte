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
