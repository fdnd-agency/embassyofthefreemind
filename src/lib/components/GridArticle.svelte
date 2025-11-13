<script>
	export let title = 'Standaard Titel';
	export let description = 'Standaard beschrijving...';
	export let imageUrl = 'images/default.png';
	export let altText = 'Standaard alt-tekst';
	export let linkUrl = '#';
</script>

<article class="grid_article">
	<h4>{title}</h4>
	<p>{description}</p>
	<div class="media-container">
		<img class="grid-image" src={imageUrl} alt={altText} />
		<a href={linkUrl} class="read-more-link">
			<span class="text-content">Meer lezen</span>
			<span class="arrow">
				<img src="images/arrow-exhibition.svg" height="15" width="15" alt="arrow" />
			</span>
		</a>
	</div>
</article>

<style>
	.grid_article {
		@media (width > 1100px) {
			display: flex;
			flex-direction: column;
			height: 100%;
			margin-left: 0.5em;
			margin-right: 0.5em;
		}
	}

	.grid_article h4 {
		text-transform: uppercase;
		font-size: clamp(1em, 2.2vw, 1.7em);
	}

	.grid_article p {
		@media (width > 1100px) {
			font-size: clamp(1em, 2vw, 1.5em);
		}
	}

	.media-container {
		position: relative;
		width: 100%;
		overflow: hidden;
		margin-top: 1.5em;

		@media (width > 1100px) {
			flex-grow: 1;
			min-height: 0;
		}
	}

	.grid-image {
		width: 100%;
		object-fit: cover;
		display: block;

		/* Base (mobile) height, < 700px */
		height: 30vh;

		/* Tablet height (syncs with parent's 700-1099px) */
		@media (min-width: 700px) and (max-width: 1099px) {
			height: 40vh;
		}

		/* Desktop height (syncs with parent's > 1100px) */
		@media (width > 1100px) {
			/* This fills the flex container */
			height: 100%;
		}
	}

	/* All other styles (.read-more-link, etc.) are correct */
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
			opacity 0.2s 0.1s,
			max-width 0.3s,
			margin-right 0.3s;
	}

	.media-container:hover .read-more-link {
		width: 150px;
		justify-content: space-between;
		opacity: 1;
		padding: 10px 20px;
	}

	.media-container:hover .read-more-link .text-content {
		opacity: 1;
		max-width: 100px;
		margin-right: 8px;
	}
</style>
