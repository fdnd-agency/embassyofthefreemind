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
		<a href={linkUrl} class="btn btn--expand read-more-link" aria-label={`Meer lezen: ${title}`}>
			<span class="btn-label">Meer lezen</span>
			<span class="btn-icon" aria-hidden="true">
				<img src="images/arrow-exhibition.svg" height="20" width="20" alt="" />
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
		bottom: 1rem;
		right: 1rem;
		z-index: 2;
		--_shadow: var(--shadow-float);
	}

	.read-more-link .btn-icon img {
		display: block;
	}

	.read-more-link .btn-icon {
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.read-more-link:hover,
	.read-more-link:focus-visible {
		width: fit-content;
		max-width: 12rem;
		justify-content: space-between;
	}

	.read-more-link:hover .btn-label,
	.read-more-link:focus-visible .btn-label {
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
		transform: translateX(0%);
		max-width: 12ch;
	}

</style>
