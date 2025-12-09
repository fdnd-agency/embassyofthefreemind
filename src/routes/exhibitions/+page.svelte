<script>
	import PokemonCard from '$lib/components/PokemonCard.svelte';

	let pokemonList = $state([]);
	let isLoading = $state(false);

	const getRandomId = () => Math.floor(Math.random() * 1025) + 1;

	async function loadBatch(count) {
		if (isLoading) return;
		isLoading = true;

		const promises = Array.from({ length: count }, async () => {
			try {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomId()}`);
				return res.ok ? await res.json() : null;
			} catch {
				return null;
			}
		});

		const results = await Promise.all(promises);
		pokemonList = [...pokemonList, ...results.filter((p) => p)];
		isLoading = false;
	}

	function handleReset() {
		pokemonList = [];
		loadBatch(1); // Start with 1 to immediately see the Black Hole effect
	}

	$effect(() => {
		if (pokemonList.length === 0) loadBatch(1);
	});
</script>

<main class="container">
	<header>
		<h1 class="glitch-text" data-text="space psychedelia gravatitational image gallery + cardflip">
			space psychedelia gravatitational image gallery + cardflip
		</h1>
		<div class="controls">
			<button on:click={() => loadBatch(1)} disabled={isLoading}>SUMMON ENTITY</button>
			<button class="secondary" on:click={handleReset} disabled={isLoading}>PURGE & RESET</button>
		</div>
	</header>

	<div class="card-grid">
		{#each pokemonList as poke, i (poke.id + Math.random())}
			<PokemonCard data={poke} index={i} />
		{/each}
	</div>
</main>

<div class="cosmic-bg"></div>
<div class="vignette"></div>

<style>
	/* === 1. GLOBAL ATMOSPHERE === */
	:global(html) {
		/* Ensure html takes full height so body can stretch */
		height: 100%;
	}

	:global(body) {
		/* FIX: Made transparent so we see the layer behind it */
		background: transparent;
		color: #e0f2fe;
		font-family: 'Courier New', monospace;
		margin: 0;
		/* Ensure body takes full screen to allow scrolling */
		min-height: 100vh;
		overflow-x: hidden;
		cursor: url('images/star-cursor.svg'), auto;
	}

	.cosmic-bg {
		position: fixed;
		inset: 0;
		z-index: -2;
		/* FIX: Apply the dark color HERE as a fallback/base */
		background-color: #050505;
		background-image: url('images/bg-space.jpg');
		background-size: cover;
		background-position: center;
		transition:
			transform 3s ease,
			filter 3s ease;
	}

	/* Dark overlay to make text readable */
	.vignette {
		position: fixed;
		inset: 0;
		z-index: -1;
		background: radial-gradient(circle at center, transparent 0%, #000 90%);
		pointer-events: none;
	}

	/* === 2. THE BLACK HOLE TRIGGER === */
	.container:has(.card-grid > :global(:nth-child(1):last-child)) ~ .cosmic-bg {
		background-image: url('/images/bg-blackhole.jpg');
		animation: gravity-spin 60s linear infinite;
		transform: scale(1.2);
	}

	@keyframes gravity-spin {
		from {
			transform: scale(1.7) rotate(0deg);
		}
		to {
			transform: scale(1.7) rotate(360deg);
		}
	}

	/* === 3. LAYOUT === */
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem;
		position: relative;
	}

	header {
		text-align: center;
		margin-bottom: 3rem;
	}

	h1.glitch-text {
		font-size: clamp(2rem, calc(10vw+2.5rem), 3rem);
		letter-spacing: 5px;
		/* Increased glow for better readability against space */
		text-shadow:
			0 0 10px #ffffff,
			0 0 20px #acacac,
			0 0 40px #a5a5a5;
		position: relative;
		display: inline-block;
	}

	::target-text {
		background-color: #bd00ff;
		color: #050505;
		font-weight: bold;
		box-shadow: 0 0 15px #bd00ff;
	}

	/* FIX: Improved Glitch Visibility */
	h1.glitch-text::before {
		content: attr(data-text);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		text-shadow: -2px 0 #00f0ff;
		background: transparent; /* Changed from black to see through */
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		animation: glitch-anim 4s infinite linear alternate-reverse;
	}

	/* FIX: New 'Bursty' Animation (Mostly static, sudden jumps) */
	@keyframes glitch-anim {
		0% {
			clip: rect(0, 0, 0, 0);
			transform: translate(0);
		}
		90% {
			clip: rect(0, 0, 0, 0);
			transform: translate(0);
		} /* Stay readable 90% of time */
		92% {
			clip: rect(10px, 9999px, 80px, 0);
			transform: translate(-2px, 2px);
		}
		94% {
			clip: rect(0, 0, 0, 0);
			transform: translate(0);
		}
		96% {
			clip: rect(44px, 9999px, 56px, 0);
			transform: translate(2px, -2px);
		}
		98% {
			clip: rect(0, 0, 0, 0);
			transform: translate(0);
		}
		100% {
			clip: rect(0, 0, 0, 0);
			transform: translate(0);
		}
	}

	.controls {
		display: flex;
		gap: 1rem;
		justify-content: center;
	}

	button {
		background: rgba(0, 0, 0, 0.6);
		border: 1px solid #bd00ff;
		color: #ffffff;
		padding: 1rem 2rem;
		font-family: inherit;
		text-transform: uppercase;
		letter-spacing: 2px;
		cursor: pointer;
		transition: all 0.3s;
		backdrop-filter: blur(5px);
	}
	button:hover {
		background: #bd00ff;
		color: #000;
		box-shadow: 0 0 20px #bd00ff;
	}
	button.secondary {
		border-color: #00f0ff;
		color: #ffffff;
	}
	button.secondary:hover {
		background: #00f0ff;
		color: #000;
		box-shadow: 0 0 20px #00f0ff;
	}

	/* === GRID LOGIC === */
	/* === THE DYNAMIC GRID BRAIN === */
	.card-grid {
		display: grid;
		gap: 5rem;
		transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
		padding-bottom: 50px;

		/* DEFAULT STATE (Fallback) */
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		max-width: 1400px;
		margin-inline: auto;
	}

	/* --- SCENARIO 1: THE SINGULARITY (1 Card) --- */
	/* Huge, centered, passes --hero: true flag */
	.card-grid:has(> :global(:nth-child(1):last-child)) {
		grid-template-columns: 1fr;
		max-width: 1000px;
		--hero: true;
	}

	/* --- SCENARIO 2: THE DUEL (Exactly 2 Cards) --- */
	/* Divisible by 2. Side-by-side, tall pillars. */
	.card-grid:has(> :global(:nth-child(2):last-child)) {
		grid-template-columns: 1fr 1fr;
		max-width: 1200px;
		align-items: stretch; /* Make them same height */
	}

	/* --- SCENARIO 3: THE PYRAMID (Exactly 3 Cards) --- */
	/* Not divisible by 2. 
   Layout: 1 Huge Card on top (spanning full width), 2 standard below. 
*/
	.card-grid:has(> :global(:nth-child(3):last-child)) {
		grid-template-columns: 1fr 1fr;
		max-width: 900px;
	}
	/* Target the 1st card in a set of 3 */
	.card-grid:has(> :global(:nth-child(3):last-child)) > :global(:first-child) {
		grid-column: span 2;
		/* Optional: Pass hero flag if you want the top one to be wide */
		--hero: true;
	}

	/* --- SCENARIO 4: THE SQUAD (Exactly 4 Cards) --- */
	/* Divisible by 2. A perfect 2x2 Square. */
	.card-grid:has(> :global(:nth-child(4):last-child)) {
		grid-template-columns: 1fr 1fr; /* Force 2 columns */
		max-width: 1000px; /* Keep the group tight */
		gap: 2rem;
	}

	/* --- SCENARIO 5+: THE BENTO (5 or more Cards) --- */
	/* The layout you had before: 1st card takes 2x2 slot */
	.card-grid:has(> :global(:nth-child(5))) {
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}
	.card-grid:has(> :global(:nth-child(5))) > :global(:first-child) {
		grid-column: span 2;
		grid-row: span 2;
	}

	/* --- MOBILE OVERRIDE --- */
	/* Crush everything to 1 column on phones */
	@media (max-width: 768px) {
		.card-grid:has(> :global(*)) {
			grid-template-columns: 1fr !important;
		}
		/* Reset spans */
		.card-grid > :global(*) {
			grid-column: auto !important;
			grid-row: auto !important;
		}
	}
</style>
