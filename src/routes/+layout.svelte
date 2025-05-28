<script>
	import "../app.css";
	import Nav from "$lib/nav.svelte";
</script>

<noscript>
	<style>
		.js-only {
			display: none;
		}
	</style>
</noscript>

<Nav/>
<div>
	<slot />
</div>