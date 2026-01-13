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

<section class="sponsors-container" aria-label="Our Sponsors">
	<div class="marquee-track">
		<div class="marquee-group">
			{#each sponsors as sponsor (sponsor.id)}
				<div class="sponsor-item">
					<img
						src={sponsor.src}
						alt={sponsor.alt}
						loading="lazy"
						decoding="async"
						width="150"
						height="80"
					/>
				</div>
			{/each}
		</div>

		<div class="desktop-only-group">
			{#each sponsors as sponsor (sponsor.id + '_dup')}
				<div class="sponsor-item">
					<img src={sponsor.src} alt="" loading="lazy" decoding="async" width="150" height="80" />
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.sponsors-container {
		--animation-speed: 40s;
		--item-gap: 1rem;
		--item-width: 150px;

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
		gap: var(--item-gap);
		width: 100%;
		justify-items: center;
	}

	.marquee-group {
		display: contents;
	}

	.marquee-track:hover,
	.marquee-track:focus-within {
		animation-play-state: paused;
	}

	.sponsor-item {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-right: 0;
	}

	img {
		height: 80px;
		width: 100%;
		object-fit: contain;

		filter: grayscale(100%) opacity(0.6);
		transition:
			transform 0.3s ease,
			filter 0.3s ease;
		/* cursor: pointer; */
	}

	img:hover {
		filter: grayscale(0%) opacity(1);
		transform: scale(1.1);
	}

	.desktop-only-group {
		display: none;
	}

	@media (min-width: 768px) {
		.sponsors-container {
			--item-gap: 2rem;
		}

		.marquee-track {
			display: flex;
			width: max-content;
			animation: scroll var(--animation-speed) linear infinite;
		}

		.marquee-group {
			display: flex;
			gap: var(--item-gap);
		}

		.desktop-only-group {
			display: flex;
			gap: var(--item-gap);
		}

		.sponsor-item {
			width: var(--item-width);
		}

		img {
			height: 90px;
			max-width: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.marquee-track {
			animation: none;
			flex-wrap: wrap;
			justify-content: center;
			width: 100%;
			max-width: 1200px;
			margin: 0 auto;
		}

		.marquee-group {
			flex-wrap: wrap;
			justify-content: center;
		}

		.sponsor-item {
			margin-right: 0;
		}

		.desktop-only-group {
			display: none;
		}
	}

	@keyframes scroll {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(calc(-50% - (var(--item-gap) / 2)));
		}
	}
</style>
