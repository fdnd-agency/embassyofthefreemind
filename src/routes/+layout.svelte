<script>
	import '$lib/styles/global-styles.css';
	import favicon from '$lib/assets/favicon.svg';
	// import { NavBar, Footer } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<!-- <NavBar /> -->

<main>
	{@render children?.()}
</main>

<!-- <Footer /> -->

<style>
	main {
		overflow-x: hidden;
	}
</style>
