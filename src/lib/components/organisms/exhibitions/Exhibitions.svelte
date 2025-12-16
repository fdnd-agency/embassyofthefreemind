<script>
	let {
		imageUrl = './assets/image37.png',
		title = 'Gewetensvrijheid!',
		subtitle = 'Denken, geloven en onderzoeken in Europa, 1500-1800',
		dates = '28 april t/m 7 september 2025',
		linkUrl = '#'
	} = $props();
</script>

<article class="available-now-card">
	<header>
		<h3>Tentoonstellingen</h3>
		<a href="/exhibitions"
			>Alle tentoonstellingen bekijken <img
				class="arrow-exhibition"
				src="images/arrow-exhibition.svg"
				height="15"
				width="15"
				alt="arrow"
			/></a
		>
	</header>
	<section class="image-section">
		<img src={imageUrl} alt="Alchemistische afbeelding met tekst" class="main-image" />

		<a href={linkUrl} target="_blank" rel="noopener noreferrer" class="overlay-container">
			<div class="date-arrow-row">
				<span class="dates">{dates}</span>
			</div>

			<div class="text-content">
				<p class="title"><strong>{title}</strong></p>
				<p class="subtitle">{subtitle}</p>

				<div class="date-arrow-row">
					<p class="ticket-text">Boek ticket</p>
					<div class="arrow-circle">
						<span
							><img
								class="arrow-ticket"
								src="images/arrow-exhibition-2.svg"
								height="12"
								width="12"
								alt="arrow"
							/></span
						>
					</div>
				</div>
			</div>
		</a>
	</section>
</article>

<style>
	.available-now-card {
		width: 100%;
		font-family: sans-serif;
		margin: 0 auto;
		aspect-ratio: 16/10;
		/* background: white; */
		place-content: center;
		container-type: inline-size;
		container-name: card;
		@media (min-width: 1800px) {
			max-width: 85%;
		}
	}

	article header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: baseline;
		padding-top: 0.5rem;
		padding-bottom: 1em;
		padding-right: 1em;

		h3 {
			text-transform: uppercase;
			font-size: clamp(2rem, 3cqw, 3.2rem);
			font-weight: 400;
			color: #333;
			padding: 10px 15px 0;
			margin-top: 0;
			margin-bottom: 1rem;
		}

		a {
			padding-left: 1em;
			gap: 1em;
			font-size: 18px;
			text-decoration: none;
			color: inherit;
		}

		@container card (width > 600px) {
			flex-direction: row;
			a {
				padding-left: 0;
			}
			padding-bottom: 0.3em;
		}
	}

	.image-section {
		position: relative;
		border-radius: none;
		overflow: hidden;
		@media (min-width: 600px) {
			/* border-radius: 30px; */
		}
	}
	.image-section::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 30%, rgba(85, 85, 85, 0.8) 100%);
		z-index: 1;
		pointer-events: none;
		border-radius: inherit;
	}

	.main-image {
		width: 100%;
		height: auto;
		display: block;
		min-height: 550px;
		max-height: 650px;
		object-fit: cover;
	}

	.overlay-container {
		z-index: 2;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		/* background: rgba(255, 255, 255, 0.925); */
		padding: 25px 30px;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		display: block;
		transition: background-color 0.2s;

		@container card (width > 600px) {
			margin-top: 0;
			width: calc(400px + 15cqw);
			left: clamp(2rem, 10cqw, 4rem);
			bottom: clamp(2rem, 5cqw, 3.5rem);
			border-radius: 30px;
			font-size: clamp(1em, 1.6cqw, 1.5em);
		}
	}

	.dates {
		margin-bottom: 0.4vw;
		@container card (width > 600px) {
			margin-left: 0.5em;
		}
	}
	.overlay-container:hover {
		/* background: rgba(255, 255, 255, 1); */
	}

	.arrow-ticket {
		z-index: 4;
		filter: brightness(0);
		transition: filter 0.4s ease;
	}

	.date-arrow-row {
		display: flex;
		flex-direction: row;
		/* justify-content: space-between; */
		align-items: center;
		/* margin-bottom: 5px; */
	}

	.dates {
		font-size: 0.9em;
		color: white;
	}

	.arrow-circle {
		margin-left: 1rem;
		background-color: #ffffff;
		color: rgb(0, 0, 0);
		width: 32px;
		height: 32px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1.2em;
		font-weight: bold;
		transition:
			background-color 0.4s ease,
			background 0.4s ease;
	}
	.overlay-container:hover .arrow-circle {
		/* filter: brightness(0) invert(1); */
	}

	.text-content {
		padding-left: 0.5em;
	}

	.arrow-circle span {
		display: block;
		transform: none;
		line-height: 0;
	}

	.arrow-exhibition {
		margin-left: 1rem;
	}

	.text-content .title {
		font-size: clamp(1.3rem, 1.386rem + 2.905vw, 3rem);
		margin: 0;
		color: #ffffff;
	}

	.ticket-text {
		color: white;
	}

	.text-content .subtitle {
		font-size: clamp(1.1rem, 1.143rem + 1.952vw, 2.2rem);
		margin: 5px 0 0;
		color: #ffffff;
	}
</style>
