<script>
	import favicon from '$lib/assets/favicon.svg';
	import { NavBar, Footer } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NavBar />

{@render children?.()}

<Footer />

<style>
	@font-face {
		font-family: 'Night Mango';
		src: url('/static/fonts/NightMango.ttf') format('truetype');
		font-weight: 400;
		font-style: normal;
	}

	:root {
		--font-display: 'Night Mango', serif;
		--font-body: 'Inter', sans-serif;
		background-color: rgb(255, 255, 255);
	}

	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
