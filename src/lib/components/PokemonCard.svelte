<script>
	import PokemonStats from './PokemonStats.svelte';

	let { data, index = 0, isHero = false } = $props();

	let isFlipped = $state(false);
	let totalStats = $derived(data.stats.reduce((a, c) => a + c.base_stat, 0));

	// Create a unique anchor name for CSS to target
	// We use the ID to ensure every card is unique
	let anchorName = $derived(`--entity-${data.id}`);
</script>

<div
	class="card-scene"
	class:hero-mode={isHero}
	style:--i={index}
	on:click={() => (isFlipped = !isFlipped)}
>
	<div class="card-inner" class:flipped={isFlipped}>
		<div class="card-face card-front">
			<div class="card-bg"></div>

			<div class="hologram-overlay"></div>
			<div class="content">
				<img
					src={data.sprites.other.dream_world.front_default || data.sprites.front_default}
					alt={data.name}
					style:anchor-name={anchorName}
				/>

				<div class="bio-scan" style:position-anchor={anchorName}>
					<div class="scan-line"></div>
					<p>HGT: {(data.height / 10).toFixed(1)}m</p>
					<p>WGT: {(data.weight / 10).toFixed(1)}kg</p>
					<p>TYPE: {data.types.map((t) => t.type.name).join('/')}</p>
				</div>

				<div class="stats-wrapper">
					<h3>{data.name}</h3>
					<PokemonStats stats={data.stats} />
				</div>
			</div>
		</div>

		<div class="card-face card-back" style:--total-stats={totalStats}>
			<div
				class="card-bg"
				style="background-image: url('/texture-back.jpg'); background-size: cover;"
			></div>
			<div class="back-content">
				<h2>{data.types[0].type.name.toUpperCase()}</h2>
				<strong class="stat-number">{totalStats}</strong>
				<span class="stat-label">ENERGY SIGNATURE</span>
			</div>
		</div>
	</div>
</div>

<style>
	.bio-scan {
		position: absolute;

		/* Anchor Positioning Logic */
		left: anchor(right);
		top: anchor(center);
		/* Try to flip to left if space is tight */
		position-try-options: flip-inline;

		/* Positioning adjustments */
		margin-left: 15px;
		transform-origin: left center;
		translate: 0 -50%;

		/* Visuals */
		width: max-content;
		color: #00f0ff;
		font-family: 'Courier New', monospace;
		font-size: 0.75rem;
		background: rgba(0, 5, 20, 0.95);
		border: 1px solid #00f0ff;
		padding: 1rem;
		border-radius: 4px;
		box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
		z-index: 100;
		pointer-events: none;
		z-index: 3;
		/* Visibility State */
		opacity: 0;
		scale: 0.8;
		transition:
			opacity 0.3s ease,
			scale 0.3s ease;
	}

	img:hover + .bio-scan {
		opacity: 1;
		scale: 1;
	}

	/* DECORATION: A connecting line */
	.bio-scan::before {
		content: '';
		position: absolute;
		top: 50%;
		left: -20px; /* Reach back towards the image */
		width: 20px;
		height: 1px;
		background: #00f0ff;
		box-shadow: 0 0 5px #00f0ff;
	}

	/* Decoration: Scanner line animation */
	.scan-line {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: rgba(255, 255, 255, 0.8);
		box-shadow: 0 0 10px white;
		animation: scan-vertical 2s linear infinite;
		opacity: 0.5;
	}

	@keyframes scan-vertical {
		0% {
			top: 0%;
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			top: 100%;
			opacity: 0;
		}
	}
	/* === 1. CONTAINER SETUP === */
	.card-scene {
		height: 100%;
		min-height: 400px; /* Made slightly taller */
		width: 100%;
		cursor: pointer;
		perspective: 1000px;

		/* Enable Container Queries on THIS element */
		container-type: inline-size;
		container-name: card-component;

		/* Animations */
		opacity: 1;
		scale: 1;
		translate: 0 0;
		transition:
			opacity 0.6s,
			scale 0.6s,
			translate 0.6s;
		transition-delay: calc(var(--i) * 100ms);
		animation: float 6s ease-in-out infinite;
		animation-delay: calc(var(--i) * -0.5s);
	}

	@starting-style {
		.card-scene {
			opacity: 0;
			scale: 0.8;
			translate: 0 50px;
		}
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-15px);
		}
	}

	.card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition: transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.2);
	}
	.card-inner.flipped {
		transform: rotateY(180deg);
	}

	/* === 2. STANDARD CARD FACE (Vertical) === */
	.card-face {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;

		/* CRITICAL CHANGE: Allow tooltip to hang out */
		overflow: visible;
		border-radius: 16px;
		/* Remove background/border from here, move to .card-bg */
		background: transparent;
		border: none;
		box-shadow: none;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 3rem;
		gap: 1.5rem;
		text-align: center;
	}

	.card-bg {
		position: absolute;
		inset: 0;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(10, 10, 20, 0.6);
		/* backdrop-filter: blur(12px); */
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
		overflow: hidden; /* Clips the internal content (like hologram) but NOT the tooltip */
		z-index: -1; /* Sit behind content */
	}

	/* === 3. HERO LAYOUT (Horizontal) === */
	/* TRIGGER: When the card is wider than 600px (i.e., Single Card Mode) */
	@container card-component (min-width: 600px) and style(--hero: true) {
		.card-front {
			flex-direction: row; /* Switch to Horizontal */
			align-items: center;
			justify-content: space-between;
			text-align: left;
			padding: 4rem; /* More breathing room */
		}

		/* Make the image huge on the left */
		.content img {
			width: 550px !important;
			height: 550px !important;
			margin-bottom: 0 !important;
			/* Add a cool float effect specifically for Hero mode */
			filter: drop-shadow(0 0 30px rgba(168, 168, 168, 0.6)) !important;
		}

		/* Move the text/stats to the right side */
		.content {
			display: flex;
			flex-direction: row;
			width: 100%;
			gap: 3rem;
			align-items: center;
		}

		/* Wrap the stats in a nice box on the right */
		.stats-wrapper {
			flex: 1;
			background: rgba(0, 0, 0, 0.3);
			padding: 5rem;
			border-radius: 12px;
			border: 1px solid rgba(255, 255, 255, 0.1);
		}

		h3 {
			font-size: 5rem; /* Giant Name */
			margin-bottom: 0.5rem;
		}
	}

	@container card-component (min-width: 600px) {
		.content img {
			width: 550px !important;
			height: 550px !important;
		}
	}

	/* === 4. INTERNAL STYLING === */
	.card-front {
		z-index: 2;
		color: white;
	}

	/* We need a wrapper div for text to flex properly in Hero mode */
	.content {
		width: 100%;
	}

	.content img {
		width: 140px;
		height: 140px;
		filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.4));
		margin-bottom: 1.5rem;
		transition: all 0.5s ease;
	}

	h3 {
		margin: 0 0 1.5rem 0;
		text-transform: uppercase;
		letter-spacing: 4px;
		font-size: 1.5rem;
		text-shadow: 0 0 10px #bd00ff;
	}

	.hologram-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(
			125deg,
			transparent 30%,
			rgba(255, 255, 255, 0.1) 40%,
			transparent 50%
		);
		z-index: -1;
		pointer-events: none;
	}

	/* === 5. BACK FACE === */
	.card-back {
		transform: rotateY(180deg);
		background-image: url('/images/texture-back.jpg');
		background-size: cover;
		container-name: back-card;
	}

	.back-content {
		background: rgba(0, 0, 0, 0.8);
		padding: 3rem;
		border-radius: 50%;
		text-align: center;
		border: 2px solid rgba(255, 255, 255, 0.1);
		aspect-ratio: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		backdrop-filter: blur(10px);
	}

	.stat-number {
		font-size: 4rem;
		display: block;
		line-height: 1;
	}
	.stat-label {
		font-size: 0.8rem;
		color: #aaa;
		letter-spacing: 2px;
		margin-top: 0.5rem;
	}

	@property --total-stats {
		syntax: '<number>';
		inherits: true;
		initial-value: 0;
	}

	@container back-card style(--total-stats >= 500) {
		.back-content {
			box-shadow: 0 0 60px #bd00ff;
			border-color: #bd00ff;
		}
		.stat-number {
			color: #bd00ff;
			text-shadow: 0 0 20px #bd00ff;
		}
	}
	@container back-card style(--total-stats < 500) {
		.back-content {
			box-shadow: 0 0 40px #00f0ff;
			border-color: #00f0ff;
		}
		.stat-number {
			color: #00f0ff;
			text-shadow: 0 0 20px #00f0ff;
		}
	}
</style>
