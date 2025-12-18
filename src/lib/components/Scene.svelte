<script>
	// Threlte (Three.js wrapper for Svelte)
	import { T } from '@threlte/core';
	// GLTF: Loads 3D models
	// interactivity: Enables mouse/touch events on 3D objects (Raycasting)
	// HTML: Renders HTML/CSS inside the 3D scene
	// Float: Adds a floating animation to its children
	import { GLTF, interactivity, HTML, Float } from '@threlte/extras';
	import { spring } from 'svelte/motion';

	// --- RAYCASTING ---
	// interactivity() enables "Raycasting".
	// triggers click or hover events on that object.
	interactivity();

	// tracking for if the model is "open" or "closed"
	let isRevealed = $state(false);

	// --- SPRINGS (Physics-based animation) ---
	// Instead of linear tweening, we use springs (it accelerates and decelerates naturally).

	// Controls the rotation of the 3D Group
	const rotation = spring([0, 0, 0], {
		stiffness: 0.08, // How tight the spring is
		damping: 0.4 // How much friction (prevents endless bouncing)
	});

	// Controls the position of the 3D Group
	const position = spring([0, 0, 0], {
		stiffness: 0.08,
		damping: 0.4
	});

	// --- reactive effect ---
	// It updates the spring targets, causing the model to animate to the new values.
	$effect(() => {
		if (isRevealed) {
			// REVEALED STATE:
			// Rotate -90deg on X
			// Move Z to 10 to bring it closer
			rotation.set([-Math.PI / 2, 0, 0]);
			position.set([0, 0, 10]);
		} else {
			// INITIAL STATE:
			// Rotate -90deg on Y to show the side profile
			// Reset position to center (0,0,0)
			rotation.set([0, -Math.PI / 2, 0]);
			position.set([0, 0, 0]);
		}
	});

	// Toggles the state between revealed and hidden
	function toggleView() {
		isRevealed = !isRevealed;
	}

	// mouse wheel event handler
	function handleScroll(event) {
		if (event.deltaY > 0 && !isRevealed) isRevealed = true; // Scroll down -> Reveal
		if (event.deltaY < 0 && isRevealed) isRevealed = false; // Scroll up -> Hide
	}
</script>

<!-- Attach the scroll listener to the window -->
<svelte:window onwheel={handleScroll} />

<!-- CAMERA
     Position is [x, y, z]. Z=32 moves it far back because the model is really large. -->
<T.PerspectiveCamera makeDefault position={[0, 2, 32]} fov={60} />

<!-- LIGHTING -->
<T.DirectionalLight position={[5, 10, 5]} intensity={2} castShadow />
<T.PointLight position={[-5, 0, -5]} intensity={1.5} color="#ff9000" />
<T.AmbientLight intensity={0.5} />

<!-- FLOAT WRAPPER:
     Everything inside here will gently Bob up and down/rotate slightly
     to simulate floating underwater. -->
<Float floatIntensity={0.5} rotationIntensity={0.5} speed={4}>
	<!-- HEADER TITLE (HTML in 3D) -->
	<!-- The 'transform' prop makes this HTML div behave like a 3D plane in the scene.
       It's positioned high up (Y=15.5) so it doesn't overlap the model. -->
	<HTML position={[0, 15.5, 0]} transform>
		<div class="header-label" style:opacity={!isRevealed ? 1 : 0}>
			<!-- name of exhibition -->
			<h1>Freedom of Conscience!</h1>
			<p>Thought, Belief, and Research in Europe, 1500-1800</p>
		</div>
	</HTML>

	<!-- ROTATING GROUP -->
	<!-- This group holds the model and the bottom text.
       We rotate/move the GROUP so the text stays attached to the model relative to its movement. -->
	<T.Group rotation={$rotation} position={$position}>
		<!-- THE 3D MODEL -->
		<GLTF
			url="/models/steampunk_underwater_explorer_4k.glb"
			onclick={(e) => {
				e.stopPropagation(); // Stop the click from passing through to things behind it
				toggleView();
			}}
			onpointerenter={() => (document.body.style.cursor = 'pointer')}
			onpointerleave={() => (document.body.style.cursor = 'auto')}
		/>
		<!-- loaded in via staic folder -->
		<!-- BOTTOM TEXT (Specs/Description) -->
		<!-- rotation.x={Math.PI/2} rotates the text 90deg.
         This is done so that when the submarine rotates 90deg (in the revealed state),
         this text also rotates and becomes readable -->
		<HTML transform position={[0, -1.5, 0.5]} rotation.x={Math.PI / 2} pointerEvents="none">
			<div class="annotation" style:opacity={isRevealed ? 1 : 0}>
				<h3>What is the world made of? And what does it mean to be a human being in it?</h3>
				<p>
					The questions sound simple. The answer is a kaleidoscope of insights that, like colourful
					pieces of glass, offer endless new points of view. Whether it is the alchemist seeking the
					Philosopher's Stone, the astrologer studying the heavens, the scientist seeking to fathom
					the secret forces of nature, the philosopher pondering the All - all are seeking knowledge
					of the nature of God, world and man. The freedom to think, ask questions, investigate and
					challenge assumptions is crucial in this process.
				</p>
			</div>
		</HTML>
	</T.Group>
</Float>

<style>
	.header-label {
		text-align: center;
		transition: opacity 0.4s ease;
		pointer-events: none; /* Allows clicks through text */
		user-select: none;
	}
	.header-label h1 {
		margin: 0;
		font-size: clamp(2rem, calc(1rem + 4vw), 3rem);
		font-weight: 800;
		color: rgb(0, 0, 0);
		text-transform: uppercase;
		letter-spacing: 0.2em;
	}
	.header-label p {
		margin: 0;
		font-size: 1.3rem;
		color: #ff9000;
		font-family: monospace;
		letter-spacing: 0.1em;
	}

	.annotation {
		background: rgba(0, 0, 0, 0.8);
		color: white;
		padding: 1rem;
		border-radius: 8px;
		width: 500px;
		text-align: center;
		backdrop-filter: blur(4px);
		transition: opacity 0.3s ease;
		user-select: none;
		pointer-events: none;
		@media (width < 700px) {
			width: 90%;
		}
	}

	h3 {
		margin: 0;
		font-size: 1.1rem;
		color: #ff9000;
	}

	.annotation h3 {
		font-size: 1.8rem;
	}

	.annotation p {
		margin: 2.25rem 0 0 0;
		font-size: 1.3rem;
		color: #ffffff;
		font-weight: 200;
	}
</style>
