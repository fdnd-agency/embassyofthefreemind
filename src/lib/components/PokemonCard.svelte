<script>
	import PokemonStats from './PokemonStats.svelte';

	let { data, index = 0 } = $props(); // Default index to 0
	let isFlipped = $state(false);

	let totalStats = $derived(data.stats.reduce((acc, curr) => acc + curr.base_stat, 0));
	let primaryType = $derived(data.types[0].type.name);
</script>

<div class="card-scene" style:--i={index} on:click={() => (isFlipped = !isFlipped)}>
	<div class="card-inner" class:flipped={isFlipped}>
		<div class="card-face card-front">
			<div class="header">
				<img src={data.sprites.front_default} alt={data.name} />
				<h3>{data.name}</h3>
			</div>
			<PokemonStats stats={data.stats} />
			<p class="hint">Tap to flip</p>
		</div>

		<div class="card-face card-back" style:--total-stats={totalStats}>
			<div class="back-content">
				<h2>{primaryType.toUpperCase()}</h2>
				<div class="stat-box">
					<span>BST</span>
					<strong>{totalStats}</strong>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* === ENTRY ANIMATION WITH @starting-style === */
	.card-scene {
		/* REMOVE THIS: height: 420px; */

		/* ADD THIS: */
		height: 100%; /* Fill the grid cell */
		min-height: 420px; /* But never get smaller than this */
		width: 100%;

		cursor: pointer;
		/* 1. Define the Final State */
		opacity: 1;
		scale: 1;
		translate: 0 0;

		/* 2. Transition settings */
		/* We calculate delay based on index: 0ms, 100ms, 200ms... */
		transition:
			opacity 0.6s ease-out,
			scale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
			translate 0.6s ease-out;

		transition-delay: calc(var(--i) * 100ms);
	}

	/* 3. Define the Initial State (Before it appears) */
	@starting-style {
		.card-scene {
			opacity: 0;
			scale: 0.8;
			translate: 0 50px; /* Slide up from bottom */
		}
	}

	/* === REST OF CARD STYLES === */
	.card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
		transform-style: preserve-3d;
	}

	.card-inner.flipped {
		transform: rotateY(180deg);
	}

	.card-face {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
		border-radius: 16px;
		box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.2);
		background: white;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		overflow: hidden;
	}

	/* Front Specifics */
	.card-front {
		z-index: 2;
	}
	.header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
		text-transform: capitalize;
	}
	.header img {
		width: 70px;
		height: 70px;
	}
	.hint {
		margin-top: auto;
		font-size: 0.75rem;
		color: #aaa;
		letter-spacing: 1px;
	}

	/* Back Specifics */
	.card-back {
		transform: rotateY(180deg);
		container-name: back-card;
		color: white;
	}

	@property --total-stats {
		syntax: '<number>';
		inherits: true;
		initial-value: 0;
	}

	.back-content {
		height: 100%;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		background: linear-gradient(135deg, #667eea, #764ba2); /* Default */
	}

	.stat-box {
		background: rgba(255, 255, 255, 0.2);
		padding: 1rem 2rem;
		border-radius: 8px;
		backdrop-filter: blur(5px);
	}
	.stat-box strong {
		display: block;
		font-size: 2.5rem;
		line-height: 1;
	}

	/* Tier Logic */
	@container back-card style(--total-stats < 350) {
		.back-content {
			background: linear-gradient(135deg, #8b4513, #a0522d);
			border: 4px solid #cd7f32;
		}
	}
	@container back-card style(--total-stats >= 350) and style(--total-stats < 500) {
		.back-content {
			background: linear-gradient(135deg, #bdc3c7, #2c3e50);
			border: 4px solid silver;
		}
	}
	@container back-card style(--total-stats >= 500) {
		.back-content {
			background: linear-gradient(135deg, #f2994a, #f2c94c);
			border: 4px solid gold;
		}
	}
</style>
