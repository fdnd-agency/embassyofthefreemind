<script lang="ts">
	import { T } from '@threlte/core';
	import { GLTF } from '@threlte/extras';

	import { interactivity } from '@threlte/extras';
	interactivity();
</script>

<!-- <Environment url="/textures/equirectangular/hdr/shanghai_riverside_1k.hdr" /> -->

<T.PerspectiveCamera makeDefault position={[2, 5, 22]} fov={70}></T.PerspectiveCamera>

<T.AmbientLight />

<GLTF url="/models/steampunk_underwater_explorer_4k.glb" />
