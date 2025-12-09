<script>
	import PokemonStats from './PokemonStats.svelte';

	// Props
	let { data, index = 0, isHero = false, isSingle = false } = $props();

	let isFlipped = $state(false);
	let totalStats = $derived(data.stats.reduce((a, c) => a + c.base_stat, 0));
	let anchorName = $derived(`--entity-${data.id}`);
</script>

<!-- svelte doesn't like this -->
<div
	class="card-scene"
	class:hero-mode={isHero}
	class:single-mode={isSingle}
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
					<p style="text-align: right;">HGT: {(data.height / 10).toFixed(1)}m</p>
					<p style="text-align: right;">WGT: {(data.weight / 10).toFixed(1)}kg</p>
					<p style="text-align: right;">TYPE: {data.types.map((t) => t.type.name).join('/')}</p>
				</div>

				<div class="stats-wrapper">
					<h3>{data.name}</h3>
					<PokemonStats stats={data.stats} />
				</div>
			</div>
		</div>

		<div class="card-face card-back" style:--total-stats={totalStats}>
			<div class="card-bg"></div>
			<div class="back-content">
				<h2>{data.types[0].type.name.toUpperCase()}</h2>
				<strong class="stat-number">{totalStats}</strong>
				<span class="stat-label">ENERGY SIGNATURE</span>
			</div>
		</div>
	</div>
</div>

<style>
	.card-scene {
		height: 100%;
		min-height: 400px;
		width: 100%;
		cursor: pointer;
		perspective: 1000px;
		z-index: 1;
		position: relative;
		container-type: inline-size;
		container-name: card-component;

		opacity: 1;
		scale: 1;
		translate: 0 0;
		transition:
			opacity 0.6s,
			scale 0.6s,
			translate 0.6s,
			z-index 0s;
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

	.card-face {
		position: absolute;
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		overflow: visible;
		border-radius: 16px;
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
		background-color: #1a1a2e;
		background-size: cover;
		background-position: center;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
		overflow: hidden;
		z-index: -1;
		opacity: 0.75;
		background-blend-mode: hard-light;
		transition: filter 0.5s ease;
	}

	.bio-scan {
		position: absolute;
		right: anchor(left);
		top: anchor(center);
		position-try-options: flip-inline;
		margin-right: 20px;
		transform-origin: right center;
		translate: 0 -50%;
		width: max-content;
		color: #00f0ff;
		font-family: 'Courier New', monospace;
		font-size: 0.9rem;
		background: rgba(0, 5, 20, 0.95);
		border: 1px solid #00f0ff;
		padding: 1rem;
		border-radius: 4px;
		box-shadow: 0 0 20px rgba(0, 240, 255, 0.4);
		z-index: 9999;
		pointer-events: none;
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
	.bio-scan::before {
		content: '';
		position: absolute;
		top: 50%;
		right: -20px;
		width: 20px;
		height: 1px;
		background: #00f0ff;
		box-shadow: 0 0 5px #00f0ff;
	}
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

	.hero-mode .card-front {
		flex-direction: column;
		justify-content: center;
		padding: 4rem;
	}
	.hero-mode .content {
		display: flex;
		flex-direction: column;
		width: 100%;
		gap: 3rem;
		align-items: center;
	}

	.hero-mode .content img {
		width: 350px !important;
		height: 350px !important;
		filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.7)) !important;
		margin-bottom: 2rem !important;
	}

	.hero-mode .stats-wrapper {
		flex: 1;
		background: rgba(0, 0, 0, 0.4);
		padding: 2rem;
		width: 100%;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.3);
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
	}
	.hero-mode h3 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
	}

	.hero-mode.single-mode .card-front {
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		text-align: left;
	}
	.hero-mode.single-mode .content {
		flex-direction: row;
		gap: 4rem;
	}
	.hero-mode.single-mode .content img {
		margin-bottom: 0 !important;
	}

	.card-front {
		z-index: 2;
		color: white;
	}
	.content {
		width: 100%;
	}
	.content img {
		width: 160px;
		height: 160px;
		filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
		margin-bottom: 2rem;
		transition: all 0.5s ease;
		position: relative;
		z-index: 2;
	}
	h3 {
		margin: 0 0 1.5rem 0;
		text-transform: uppercase;
		letter-spacing: 4px;
		font-size: 1.8rem;
		text-shadow: 0 0 10px #636363;
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
		z-index: 1;
		pointer-events: none;
	}

	.card-back {
		transform: rotateY(180deg);
		container-name: back-card;
	}
	.back-content {
		background: rgba(0, 0, 0, 0.7);
		padding: 3rem;
		border-radius: 50%;
		text-align: center;
		border: 2px solid rgba(255, 255, 255, 0.2);
		aspect-ratio: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		backdrop-filter: blur(15px);
		box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);
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

	/* === TIER LOGIC === */
	@container back-card style(--total-stats < 400) {
		.card-bg {
			background-image: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop');
			filter: grayscale(1) contrast(1.2) brightness(0.6);
		}
		.back-content {
			box-shadow: 0 0 30px rgba(100, 100, 100, 0.5);
			border-color: #666;
		}
		.stat-number {
			color: #aaa;
			text-shadow: 0 0 10px #fff;
		}
	}

	@container back-card style(--total-stats >= 400) and style(--total-stats < 525) {
		.card-bg {
			background-image: url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop');
			filter: hue-rotate(180deg) saturate(1.2);
		}
		.back-content {
			box-shadow: 0 0 50px #00f0ff;
			border-color: #00f0ff;
		}
		.stat-number {
			color: #00f0ff;
			text-shadow: 0 0 20px #00f0ff;
		}
	}

	@container back-card style(--total-stats >= 525) {
		.card-bg {
			background-image: url('https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1000&auto=format&fit=crop');
			filter: saturate(1.5) contrast(1.2) hue-rotate(-20deg);
		}
		.back-content {
			box-shadow: 0 0 80px #bd00ff;
			border-color: #bd00ff;
		}
		.stat-number {
			color: #bd00ff;
			text-shadow: 0 0 30px #bd00ff;
		}
	}
</style>
