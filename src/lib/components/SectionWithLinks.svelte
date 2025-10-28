<section>
	<!-- 1. OVER HET MUSEUM (About the museum) -->
	<article>
		<h4>Over het Museum</h4>
		<p>
			Ga op ontdekkingsreis door 2.000 jaar verzamelde wijsheid, geïnspireerd door de afbeeldingen
			en teksten uit de collectie van de Bibliotheca Philosophica Hermetica.
		</p>
		<div class="media-container">
			<img src="images/article-1.png" alt="Afbeelding van de bibliotheek" />
			<a href="#" class="read-more-link">
				<span class="text-content">Meer lezen</span>
				<span class="arrow"
					><img src="images/arrow-exhibition.svg" height="15" width="15" alt="arrow" /></span
				>
			</a>
		</div>
	</article>

	<!-- 2. PLAN JE BEZOEK (Plan your visit) -->
	<article>
		<h4>Plan je Bezoek</h4>
		<p>
			Lees op deze pagina praktische informatie over onze openingstijden, tickets/prijzen, adres &
			route.
		</p>
		<div class="media-container">
			<img src="images/article-2.png" alt="Afbeelding van illustraties" />
			<a href="#" class="read-more-link">
				<span class="text-content">Bekijk info</span>
				<span class="arrow"
					><img src="images/arrow-exhibition.svg" height="15" width="15" alt="arrow" /></span
				>
			</a>
		</div>
	</article>

	<!-- 3. KIDS -->
	<article>
		<h4>Kids</h4>
		<p>Ontdek hier alle activiteiten speciaal voor kinderen.</p>
		<div class="media-container">
			<img src="images/article-3.png" alt="Afbeelding van een konijn met trompet" />
			<a href="#" class="read-more-link">
				<span class="text-content">Ontdek</span>
				<span class="arrow"
					><img src="images/arrow-exhibition.svg" height="15" width="15" alt="arrow" /></span
				>
			</a>
		</div>
	</article>
</section>

<section>
	<!-- 4. RONDLEIDINGEN (Tours) -->
	<article>
		<h4>Rondleidingen</h4>
		<p>
			Boek een rondleiding en kom meer te weten over de Embassy of the Free Mind en de collectie!
		</p>
		<div class="media-container">
			<img src="images/article-4.png" alt="Afbeelding van mythische dieren" />
			<a href="#" class="read-more-link">
				<span class="text-content">Boek een Tour</span>
				<span class="arrow"
					><img src="images/arrow-exhibition.svg" height="15" width="15" alt="arrow" /></span
				>
			</a>
		</div>
	</article>

	<!-- 5. HUISREGELS (House Rules) -->
	<article>
		<h4>Huisregels</h4>
		<p>Huisregels Embassy of the Free Mind.</p>
		<div class="media-container">
			<img src="images/article-5.png" alt="Afbeelding van een oud manuscript" />
			<a href="#" class="read-more-link">
				<span class="text-content">Bekijk regels</span>
				<span class="arrow"
					><img src="images/arrow-exhibition.svg" height="15" width="15" alt="arrow" /></span
				>
			</a>
		</div>
	</article>

	<!-- 6. ZAALVERHUUR (Venue Rental) -->
	<article>
		<h4>Zaalverhuur</h4>
		<p>
			U kunt onze Grote Seal huren voor bijeenkomsten zoals b.v. vergaderingen en bruiloften en
			bedrijfsevenementen.
		</p>
		<div class="media-container">
			<img src="images/article-6.png" alt="Afbeelding van de Grote Seal ruimte" />
			<a href="#" class="read-more-link">
				<span class="text-content">Vraag offerte aan</span>
				<span class="arrow"
					><img src="images/arrow-exhibition.svg" height="15" width="15" alt="arrow" /></span
				>
			</a>
		</div>
	</article>
</section>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
	section {
		max-width: 90%;
		height: auto;
		margin-left: 5%;
		place-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		h4 {
			text-transform: uppercase;
			font-size: clamp(1em, 2.2vw, 1.7em);
		}
		img {
			width: 100%;
			@media (width > 400px) {
				position: relative;
				object-fit: contain;
			}
		}
		@media (width > 1100px) {
			display: grid;

			grid-template-columns: 4.6fr 2.4fr 2.4fr;
			grid-template-rows: repeat(14, calc(1.5vh - 0.25em));
			gap: 1em;
			article {
				margin-left: 0.5em;
				margin-right: 0.5em;
				p {
					font-size: clamp(1em, 2vw, 1.5em);
				}
			}
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
		margin-top: 12%;
		margin-bottom: calc(1em + 15%);
	}

	.media-container {
		position: relative;
		width: 100%;
		margin-top: 1em;
		overflow: hidden;
		/* border-radius: 8px; */
	}

	.media-container img {
		width: 100%;
		display: block;
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
