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

	function handleClearAndLoad() {
		pokemonList = [];
		loadBatch(6);
	}

	function handleReset() {
		pokemonList = [];
		loadBatch(1);
	}

	async function handleReroll(index) {
		try {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${getRandomId()}`);
			if (res.ok) {
				const newData = await res.json();
				pokemonList[index] = newData;
			}
		} catch (e) {
			console.error('Reroll failed', e);
		}
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
			<button on:click={handleClearAndLoad} disabled={isLoading}>SUMMON SQUAD (6)</button>
			<button class="secondary" on:click={handleReset} disabled={isLoading}>PURGE & RESET</button>
		</div>
	</header>

	<div class="card-grid">
		{#each pokemonList as poke, i (poke.id + Math.random())}
			<PokemonCard
				data={poke}
				index={i}
				isHero={i === 0 && (pokemonList.length === 1 || pokemonList.length >= 5)}
				isSingle={pokemonList.length === 1}
				onReroll={() => handleReroll(i)}
			/>
		{/each}
	</div>
</main>

<div class="cosmic-bg"></div>
<div class="vignette"></div>

<style>
	:global(html) {
		height: 100%;
	}
	:global(body) {
		background: transparent;
		color: #e0f2fe;
		font-family: 'Courier New', monospace;
		margin: 0;
		min-height: 100vh;
		overflow-x: hidden;
		cursor: url('/images/star-cursor.svg'), auto;
	}

	.cosmic-bg {
		position: fixed;
		inset: 0;
		z-index: -2;
		background-color: #050505;
		background-image: url('/images/bg-space.jpg');
		background-size: cover;
		background-position: center;
		transition:
			transform 3s ease,
			filter 3s ease;
	}
	.vignette {
		position: fixed;
		inset: 0;
		z-index: -1;
		background: radial-gradient(circle at center, transparent 0%, #000 90%);
		pointer-events: none;
	}

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
		text-shadow:
			0 0 5px #ffffff,
			0 0 10px #acacac;
		position: relative;
		display: inline-block;
		font-weight: 520;
	}
	h1.glitch-text::before {
		content: attr(data-text);
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		text-shadow: -2px 0 #00f0ff;
		background: transparent;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		animation: glitch-anim 4s infinite linear alternate-reverse;
	}
	@keyframes glitch-anim {
		0%,
		90% {
			clip: rect(0, 0, 0, 0);
			transform: translate(0);
		}
		92% {
			clip: rect(10px, 9999px, 80px, 0);
			transform: translate(-2px, 2px);
		}
		96% {
			clip: rect(44px, 9999px, 56px, 0);
			transform: translate(2px, -2px);
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
		color: white;
		padding: 1rem 2rem;
		cursor: pointer;
		transition: all 0.3s;
		backdrop-filter: blur(5px);
		font-family: inherit;
	}
	button:hover {
		background: #bd00ff;
		color: black;
		box-shadow: 0 0 20px #bd00ff;
	}
	button.secondary {
		border-color: #00f0ff;
	}
	button.secondary:hover {
		background: #00f0ff;
		box-shadow: 0 0 20px #00f0ff;
	}

	.card-grid {
		display: grid;
		gap: 5rem;
		transition: all 0.5s ease;
		padding-bottom: 50px;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		max-width: 1400px;
		margin-inline: auto;
	}

	/* 1 Card */
	.card-grid:has(> :global(:nth-child(1):last-child)) {
		grid-template-columns: 1fr;
		max-width: 1000px;
		--hero: true;
	}
	/* 2 Cards */
	.card-grid:has(> :global(:nth-child(2):last-child)) {
		grid-template-columns: 1fr 1fr;
		max-width: 1200px;
	}
	/* 3 Cards */
	.card-grid:has(> :global(:nth-child(3):last-child)) {
		grid-template-columns: 1fr 1fr;
		max-width: 900px;
	}
	.card-grid:has(> :global(:nth-child(3):last-child)) > :global(:first-child) {
		grid-column: span 2;
	}
	/* 4 Cards */
	.card-grid:has(> :global(:nth-child(4):last-child)) {
		grid-template-columns: 1fr 1fr;
		max-width: 1000px;
		/* gap: 2rem; */
	}
	/* 5+ Cards */
	.card-grid:has(> :global(:nth-child(5))) > :global(:first-child) {
		grid-column: span 2;
		grid-row: span 2;
	}

	/* update sometime */
	@media (max-width: 768px) {
		.card-grid:has(> :global(*)) {
			grid-template-columns: 1fr !important;
		}
		.card-grid > :global(*) {
			grid-column: auto !important;
			grid-row: auto !important;
		}
	}
</style>
