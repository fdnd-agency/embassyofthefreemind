<script>
	import GridArticle from './GridArticle.svelte';
</script>

<section class="section_grid">
	<GridArticle
		title="Over het Museum"
		description="Ga op ontdekkingsreis door 2.000 jaar verzamelde wijsheid, geïnspireerd door de afbeeldingen en teksten uit de collectie van de Bibliotheca Philosophica Hermetica."
		imageUrl="images/article-1.jpg"
		altText="Afbeelding van de bibliotheek"
		linkUrl="#"
	/>

	<GridArticle
		title="Plan je Bezoek"
		description="Lees op deze pagina praktische informatie over onze openingstijden, tickets/prijzen, adres & route."
		imageUrl="images/article-2.jpg"
		altText="Afbeelding van illustraties"
		linkUrl="#"
	/>

	<GridArticle
		title="Kids"
		description="Ontdek hier alle activiteiten speciaal voor kinderen."
		imageUrl="images/article-3.jpg"
		altText="Afbeelding van een konijn met trompet"
		linkUrl="#"
	/>
</section>

<section class="section_grid">
	<GridArticle
		title="Rondleidingen"
		description="Boek een rondleiding en kom meer te weten over de Embassy of the Free Mind en de collectie!"
		imageUrl="images/article-4.jpg"
		altText="Afbeelding van mythische dieren"
		linkUrl="#"
	/>

	<GridArticle
		title="Huisregels"
		description="Huisregels Embassy of the Free Mind."
		imageUrl="images/article-5.jpg"
		altText="Afbeelding van een oud manuscript"
		linkUrl="#"
	/>

	<GridArticle
		title="Zaalverhuur"
		description="U kunt onze Grote Seal huren voor bijeenkomsten zoals b.v. vergaderingen en bruiloften en bedrijfsevenementen."
		imageUrl="images/article-6.jpg"
		altText="Afbeelding van de Grote Seal ruimte"
		linkUrl="#"
	/>
</section>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	.section_grid:nth-of-type(2) {
		margin-top: 4%;
		/* margin-bottom: 35vh; */
		/* margin-bottom: calc(1em + 15%); */
		@media (width > 700px) {
			margin-bottom: 0;
		}
	}
	.section_grid:nth-of-type(3) {
		@media (width > 700px) {
			transform: translateY(calc(-25% + 6em));
		}
	}
	.section_grid {
		max-width: 95%;
		height: auto;
		margin-left: auto;
		margin-right: auto;
		place-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;

		@media (min-width: 700px) {
			max-width: 70%;
		}

		@media (width > 700px) {
			display: grid;
			max-width: 90%;
			grid-template-columns: 4.6fr 2.4fr 2.4fr;
			grid-template-rows: repeat(18, calc(0.8 + 0.65em));
			gap: 1em;
			margin-bottom: 0;
			:global(article:first-of-type) {
				grid-row-start: 2;
				grid-row-end: 17;
			}
			:global(article:nth-of-type(2)) {
				grid-row-start: 1;
				grid-row-end: 13;
			}
			:global(article:nth-of-type(3)) {
				grid-row-start: 3;
				grid-row-end: 15;
			}
		}
		@media (width > 1100px) {
			grid-template-rows: repeat(18, calc(2.6vh + 0.65em));
		}
	}
</style>
