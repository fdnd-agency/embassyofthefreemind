<script>
	import GridArticle from '../../molecules/gridarticle/GridArticle.svelte';
	// Import the CSS file just for this component
	import './SectionWithLinks.css';
</script>

<div class="wrapper">
	<section class="grid-layout">
		<div class="grid-item">
			<GridArticle
				title="Over het Museum"
				description="Ga op ontdekkingsreis door 2.000 jaar verzamelde wijsheid, geïnspireerd door de afbeeldingen en teksten uit de collectie van de Bibliotheca Philosophica Hermetica."
				imageUrl="images/article-1.jpg"
				altText="Afbeelding van de bibliotheek"
				linkUrl="#"
			/>
		</div>

		<div class="grid-item">
			<GridArticle
				title="Plan je Bezoek"
				description="Lees op deze pagina praktische informatie over onze openingstijden, tickets/prijzen, adres & route."
				imageUrl="images/article-2.jpg"
				altText="Afbeelding van illustraties"
				linkUrl="#"
			/>
		</div>

		<div class="grid-item">
			<GridArticle
				title="Kids"
				description="Ontdek hier alle activiteiten speciaal voor kinderen."
				imageUrl="images/article-3.jpg"
				altText="Afbeelding van een konijn met trompet"
				linkUrl="#"
			/>
		</div>

		<div class="grid-item">
			<GridArticle
				title="Rondleidingen"
				description="Boek een rondleiding en kom meer te weten over de Embassy of the Free Mind!"
				imageUrl="images/article-4.jpg"
				altText="Afbeelding van mythische dieren"
				linkUrl="#"
			/>
		</div>

		<div class="grid-item">
			<GridArticle
				title="Huisregels"
				description="Huisregels Embassy of the Free Mind."
				imageUrl="images/article-5.jpg"
				altText="Afbeelding van een oud manuscript"
				linkUrl="#"
			/>
		</div>

		<div class="grid-item">
			<GridArticle
				title="Zaalverhuur"
				description="U kunt onze Grote Seal huren voor bijeenkomsten zoals bv. vergaderingen en bruiloften en bedrijfsevenementen. "
				imageUrl="images/article-6.jpg"
				altText="Afbeelding van de Grote Seal ruimte"
				linkUrl="#"
			/>
		</div>
	</section>
</div>
