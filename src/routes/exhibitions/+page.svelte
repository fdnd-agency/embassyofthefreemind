<script>
	/** @type {import('./$types').PageProps} */
	let { data } = $props();
	import { Canvas } from '@threlte/core';
	import Scene from '../../lib/components/Scene.svelte';
</script>

<Canvas>
	<Scene />
</Canvas>
