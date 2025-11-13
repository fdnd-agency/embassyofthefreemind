<script>
	import GridArticle from './GridArticle.svelte';
</script>

<section>
	<GridArticle
		title="Over het Museum"
		description="Ga op ontdekkingsreis door 2.000 jaar verzamelde wijsheid, geïnspireerd door de afbeeldingen en teksten uit de collectie van de Bibliotheca Philosophica Hermetica."
		imageUrl="images/article-1.png"
		altText="Afbeelding van de bibliotheek"
		linkUrl="#"
	/>

	<GridArticle
		title="Plan je Bezoek"
		description="Lees op deze pagina praktische informatie over onze openingstijden, tickets/prijzen, adres & route."
		imageUrl="images/article-2.png"
		altText="Afbeelding van illustraties"
		linkUrl="#"
	/>

	<GridArticle
		title="Kids"
		description="Ontdek hier alle activiteiten speciaal voor kinderen."
		imageUrl="images/article-3.png"
		altText="Afbeelding van een konijn met trompet"
		linkUrl="#"
	/>
</section>

<section>
	<GridArticle
		title="Rondleidingen"
		description="Boek een rondleiding en kom meer te weten over de Embassy of the Free Mind en de collectie!"
		imageUrl="images/article-4.png"
		altText="Afbeelding van mythische dieren"
		linkUrl="#"
	/>

	<GridArticle
		title="Huisregels"
		description="Huisregels Embassy of the Free Mind."
		imageUrl="images/article-5.png"
		altText="Afbeelding van een oud manuscript"
		linkUrl="#"
	/>

	<GridArticle
		title="Zaalverhuur"
		description="U kunt onze Grote Seal huren voor bijeenkomsten zoals b.v. vergaderingen en bruiloften en bedrijfsevenementen."
		imageUrl="images/article-6.png"
		altText="Afbeelding van de Grote Seal ruimte"
		linkUrl="#"
	/>
</section>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}

	section {
		max-width: 95%;
		height: auto;
		margin-left: auto;
		margin-right: auto;
		place-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;

		@media (min-width: 700px) and (max-width: 1099px) {
			max-width: 70%;
		}

		@media (width > 1100px) {
			display: grid;
			max-width: 90%;
			grid-template-columns: 4.6fr 2.4fr 2.4fr;
			grid-template-rows: repeat(14, calc(1.5vh - 0.25em));
			gap: 1em;
			article:first-of-type {
				grid-row-start: 4;
				grid-row-end: 14;
			}
			article:nth-of-type(2) {
				grid-row-start: 2;
				grid-row-end: 10;
			}
			article:nth-of-type(3) {
				grid-row-start: 6;
				grid-row-end: 13;
			}
		}
	}
	section:first-of-type {
		margin-top: 14%;
		margin-bottom: calc(1em + 15%);
	}
	section:nth-of-type(3) {
		margin-top: calc(18% - 1em);
		margin-bottom: 15%;
	}
</style>
