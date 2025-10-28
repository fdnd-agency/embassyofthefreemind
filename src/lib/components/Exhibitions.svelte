<script>
	export let imageUrl = './assets/image37.png';
	export let title = 'Gewetensvrijheid!';
	export let subtitle = 'Denken, geloven en onderzoeken in Europa, 1500-1800';
	export let dates = '28 april t/m 7 september 2025';
	export let linkUrl = '#';
</script>

<article class="available-now-card">
	<header>
		<h3>Tentoonstellingen</h3>
		<a href="/exhibitions"
			>Alle tentoonstellingen bekijken <img
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
				<div class="arrow-circle">
					<span><img src="images/arrow-exhibition-2.svg" height="25" width="25" alt="arrow" /></span
					>
				</div>
			</div>

			<div class="text-content">
				<p class="title"><strong>{title}</strong></p>
				<p class="subtitle">{subtitle}</p>
			</div>
		</a>
	</section>
</article>

<style>
	.available-now-card {
		width: 90%;
		font-family: sans-serif;
		margin-left: 5%;
		margin-right: 5%;

		border: 1px solid #eee;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
		background: white;
		place-content: center;
		@media (min-width: 500px) {
			max-width: 100%;
		}
	}

	article header {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-bottom: 1em;
		padding-right: 1em;

		h3 {
			text-transform: uppercase;
			font-size: clamp(1em, 2.7vw, 2em);
			font-weight: bold;
			color: #333;
			padding: 10px 15px 0;
			margin-top: 0;
			margin-bottom: 5px;
		}

		a {
			padding-left: 1em;
			font-size: clamp(1em, 2vw, 1.5em);
			text-decoration: none;
			color: inherit;
		}

		@media (width > 600px) {
			flex-direction: row;
			a {
				padding-left: 0;
			}
		}
	}

	.image-section {
		position: relative;
	}

	.main-image {
		width: 100%;
		height: auto;
		display: block;
		min-height: 400px;
		object-fit: cover;
	}

	.overlay-container {
		width: 95%;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(255, 255, 255, 0.89);
		padding: 25px 30px;
		text-decoration: none;
		color: inherit;
		cursor: pointer;
		display: block;
		transition: background-color 0.2s;

		@media (width > 600px) {
			width: calc(300px + 15vw);
			left: 5em;
			border-radius: 2em;
			bottom: 5em;
			font-size: clamp(1em, 1.6vw, 1.5em);
		}
	}

	.dates {
		@media (width > 600px) {
			margin-bottom: 2vw;
			margin-left: 0.5em;
		}
	}
	.overlay-container:hover {
		background: rgba(255, 255, 255, 1);
	}

	.date-arrow-row {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 5px;
	}

	.dates {
		font-size: 0.9em;
		color: #555;
	}

	.arrow-circle {
		background-color: #002646;
		color: white;
		width: 48px;
		height: 48px;
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
		background: linear-gradient(to right, #002646, #005dac, #004279);
	}

	.text-content {
		padding-left: 0.5em;
	}

	.arrow-circle span {
		transform: translateY(4.5px);
		display: block;
	}

	.text-content .title {
		font-size: 1.2em;
		margin: 0;
		color: #000;
	}

	.text-content .subtitle {
		font-size: 0.9em;
		margin: 5px 0 0;
		color: #444;
	}
</style>
