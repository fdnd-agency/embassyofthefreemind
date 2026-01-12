<script>
	let {
		title = 'Standaard Titel',
		description = 'Standaard beschrijving...',
		imageUrl = 'images/default.png',
		altText = 'Standaard alt-tekst',
		linkUrl = '#'
	} = $props();
</script>

<article class="grid-article">
	<h4>{title}</h4>
	<p>{description}</p>
	<div class="media-container">
		<picture>
			<img class="grid-image" src={imageUrl} alt={altText} loading="lazy" decoding="async" />
		</picture>
		<button class="btn btn--type2">
			<span class="btn_label">Meer lezen</span>
			<span class="btn_icon">
				<img src="/images/arrow-exhibition.svg" alt="arrow" />
			</span>
		</button>
		<a href={linkUrl} class="read-more-link">
			<span class="text-content">Meer lezen</span>
			<span class="arrow">
				<img src="images/arrow-exhibition.svg" height="15" width="15" alt="arrow" />
			</span>
		</a>
	</div>
</article>

<style>
	.grid-article {
		display: flex;
		flex-direction: column;
		height: 100%;
		margin-top: 0.5em;
		@media (width > 700px) {
			margin-left: 0.5em;
			margin-right: 0.5em;
		}
	}

	.grid-article h4 {
		font-weight: 400;
		text-transform: uppercase;
		font-size: clamp(1.8em, 2.6vw, 2.7em);
		margin: 0.2em 0;
	}

	.grid-article p {
		margin-bottom: 1.5rem;
		@media (width > 700px) {
			font-size: clamp(1.25em, 1.1vw, 2.5em);
		}
	}

	.media-container {
		position: relative;
		width: 100%;
		overflow: hidden;
	}

	.grid-image {
		width: 100%;
		object-fit: cover;
		display: block;
		height: 30vh;

		@media (width > 1100px) {
			height: auto;
			width: 100%;
			aspect-ratio: var(--aspect-ratio, auto);
		}
	}
	.read-more-link {
		position: absolute;
		bottom: 15px;
		right: 15px;
		height: 40px;
		width: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px 10px;
		background-color: white;
		border-radius: 4em;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
		transition:
			width 0.3s ease-in-out,
			background-color 0.3s ease-in-out,
			opacity 0.3s ease-in-out;
		font-size: 1.2em;
		font-weight: 600;
		color: #1a202c;
		white-space: nowrap;
		overflow: hidden;
		opacity: 1;
		z-index: 2;
		text-decoration: none;
	}

	.read-more-link .text-content {
		color: #002646;
		opacity: 0;
		max-width: 0;
		min-width: 0;
		flex-basis: 0;
		transition:
			opacity 0s,
			max-width 0.3s,
			margin-right 0.3s;
	}

	.media-container:hover .read-more-link {
		width: 110px;
		justify-content: space-between;
		opacity: 1;
		padding: 10px 20px;
	}

	.media-container:hover .read-more-link .text-content {
		opacity: 1;
		max-width: 70px;
		margin-right: 8px;
		transition:
			opacity 0.2s 0.1s,
			max-width 0.3s,
			margin-right 0.3s;
	}

	@media (700px <= width <= 1100px) {
		.media-container:hover .read-more-link {
			max-width: 140px;
		}
		.media-container:hover .read-more-link .text-content {
			max-width: 100px;
		}
	}
	@media (width > 1100px) {
		.media-container:hover .read-more-link {
			width: 150px;
		}
		.media-container:hover .read-more-link .text-content {
			max-width: 120px;
		}
	}
</style>
