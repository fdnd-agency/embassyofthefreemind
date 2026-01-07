<script>
	const sponsorCount = 15;

	const sponsors = Array.from({ length: sponsorCount }, (_, i) => {
		const num = i + 1;
		return {
			id: num,
			src: `/images/sponsors/sponsor${num}.svg`,
			alt: `Sponsor ${num}`
		};
	});
</script>

<section class="sponsors-container">
	<div class="marquee-track">
		{#each sponsors as sponsor (sponsor.id)}
			<div class="sponsor-item">
				<img src={sponsor.src} alt={sponsor.alt} loading="lazy" width="150" height="80" />
			</div>
		{/each}

		<div class="desktop-only-group">
			{#each sponsors as sponsor (sponsor.id + '_dup')}
				<div class="sponsor-item">
					<img src={sponsor.src} alt={sponsor.alt} aria-hidden="true" width="150" height="80" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.sponsors-container {
		width: auto;
		max-width: 100%;
		box-sizing: border-box;

		padding: 3rem 1.5rem;
		background-color: transparent;
		overflow: hidden;
	}

	.marquee-track {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
		width: 100%;
		justify-items: center;
	}

	.sponsor-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
	}

	img {
		height: 60px;
		width: 100%;
		max-width: 100px;
		object-fit: contain;

		filter: grayscale(100%) opacity(0.6);
		transition:
			transform 0.3s ease,
			filter 0.3s ease;
		cursor: pointer;
	}

	img:hover {
		filter: grayscale(0%) opacity(1);
		transform: scale(1.1);
	}

	/* Hide duplicates on mobile */
	.desktop-only-group {
		display: none;
	}

	@media (min-width: 768px) {
		.marquee-track {
			display: flex;

			width: max-content;
			gap: 2rem;
			animation: scroll 40s linear infinite;
		}

		.marquee-track:hover {
			animation-play-state: paused;
		}

		.desktop-only-group {
			display: flex;
			gap: 2rem;
		}

		img {
			height: 90px;
			max-width: none;
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
