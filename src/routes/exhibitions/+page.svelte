<script>
	import PokemonCard from '$lib/components/PokemonCard.svelte';
	let pokemonList = $state([]);
	let isLoading = $state(false);

	const getRandomId = () => Math.floor(Math.random() * 1025) + 1;

	async function getPokemonData(id) {
		try {
			const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
			if (!res.ok) throw new Error('Failed');
			return await res.json();
		} catch (e) {
			console.error(e);
			return null;
		}
	}

	async function loadBatch(count) {
		if (isLoading) return;
		isLoading = true;
		const promises = Array.from({ length: count }, () => getPokemonData(getRandomId()));
		const results = await Promise.all(promises);
		const validResults = results.filter((p) => p !== null);

		// Add new cards to the END of the list
		pokemonList = [...pokemonList, ...validResults];
		isLoading = false;
	}

	function handleReset() {
		pokemonList = [];
		loadBatch(6);
	}

	$effect(() => {
		if (pokemonList.length === 0) loadBatch(1); // Start with 3 for dramatic layout demo
	});
</script>

<main class="container">
	<header>
		<h1>Dynamic Layouts & Entry</h1>
		<div class="controls">
			<button on:click={() => loadBatch(1)} disabled={isLoading}>+ Add 1</button>
			<button class="secondary" on:click={handleReset} disabled={isLoading}>Reset</button>
		</div>
	</header>

	<div class="card-grid">
		{#each pokemonList as poke, i (poke.id + Math.random())}
			<PokemonCard data={poke} index={i % 10} />
		{/each}
	</div>
</main>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		font-family: system-ui, sans-serif;
	}

	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-bottom: 2rem;
		gap: 1rem;
	}
	.controls {
		display: flex;
		gap: 1rem;
	}
	button {
		padding: 0.8rem 1.5rem;
		border: none;
		border-radius: 8px;
		background: #2563eb;
		color: white;
		cursor: pointer;
		transition: scale 0.1s;
	}
	button:active {
		scale: 0.95;
	}
	button.secondary {
		background: #4b5563;
	}

	/* --- DYNAMIC LAYOUT ENGINE (Fixed for Svelte) --- */

	.card-grid {
		display: grid;
		gap: 2rem;
		transition: all 0.5s ease;
		/* Default: Standard Auto-Fill Grid */
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		max-width: 100%;
	}

	/* FIX: We use :global(...) around the child selectors.
	   This tells Svelte: "Check if the grid HAS a global element that is the 1st child"
	*/

	/* CASE 1: Exactly 1 Card */
	.card-grid:has(> :global(:nth-child(1):last-child)) {
		grid-template-columns: 1fr;
		max-width: 500px;
		margin-inline: auto;
	}

	/* CASE 2: Exactly 2 Cards */
	.card-grid:has(> :global(:nth-child(2):last-child)) {
		grid-template-columns: 1fr 1fr;
		max-width: 800px;
		margin-inline: auto;
	}

	/* CASE 3: Bento Box (5+ Cards) */
	/* Logic: If the grid HAS a 5th child...
	   Then target the FIRST child and make it span 2x2.
	*/
	.card-grid:has(> :global(:nth-child(5))) > :global(:first-child) {
		grid-column: span 2;
		grid-row: span 2;
	}

	/* Mobile Reset */
	@media (max-width: 700px) {
		.card-grid:has(> :global(:nth-child(5))) > :global(:first-child) {
			grid-column: span 1;
			grid-row: span 1;
		}
	}
</style>
