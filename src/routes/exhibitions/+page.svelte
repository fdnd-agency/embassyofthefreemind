<script>
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/Scene.svelte';

	/** @type {import('./$types').PageProps} */
	let { data } = $props();
</script>

<div class="scene-container">
	<Canvas>
		<Scene />
	</Canvas>

	<div class="ui-overlay">
		<p>Scroll or Click model to interact</p>
	</div>
</div>

<style>
	/* not important for now since this won't be merged */
	:global(body) {
		margin: 0;
		overflow: hidden; /* Prevent default page scroll since we use scroll for 3D interaction */
	}

	/* full size */
	.scene-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		background: #eeeeee;
	}

	/* text at bottom for user since I haven't added a hover effect. */
	.ui-overlay {
		position: absolute;
		bottom: 4rem;
		left: 0;
		width: 100%;
		text-align: center;
		pointer-events: none;
		color: rgb(0, 0, 0);
		font-family: sans-serif;
		opacity: 0.5;
	}
</style>
