<section>
	<!-- 1. OVER HET MUSEUM (About the museum) -->
	<article>
		<h4>Over het Museum</h4>
		<p>
			Ga op ontdekkingsreis door 2.000 jaar verzamelde wijsheid, geïnspireerd door de afbeeldingen
			en teksten uit de collectie van de Bibliotheca Philosophica Hermetica.
		</p>
		<img src="images/article-1.png" />
		<p><a href="#">Meer lezen &rarr;</a></p>
	</article>

	<!-- 2. PLAN JE BEZOEK (Plan your visit) -->
	<article>
		<h4>Plan je Bezoek</h4>
		<p>
			Lees op deze pagina praktische informatie over onze openingstijden, tickets/prijzen, adres &
			route.
		</p>
		<img src="images/article-2.png" />
		<p><a href="#">Meer lezen &rarr;</a></p>
	</article>

	<!-- 3. KIDS -->
	<article>
		<h4>Kids</h4>
		<p>Ontdek hier alle activiteiten speciaal voor kinderen.</p>
		<img src="images/article-3.png" />
		<p><a href="#">Meer lezen &rarr;</a></p>
	</article>
</section>

<section>
	<!-- 4. RONDLEIDINGEN (Tours) -->
	<article>
		<h4>Rondleidingen</h4>
		<p>
			Boek een rondleiding en kom meer te weten over de Embassy of the Free Mind en de collectie!
		</p>
		<img src="images/article-4.png" />
		<p><a href="#">Meer lezen &rarr;</a></p>
	</article>

	<!-- 5. HUISREGELS (House Rules) -->
	<article>
		<h4>Huisregels</h4>
		<p>Huisregels Embassy of the Free Mind.</p>
		<img src="images/article-5.png" />
		<p><a href="#">Meer lezen &rarr;</a></p>
	</article>

	<!-- 6. ZAALVERHUUR (Venue Rental) -->
	<article>
		<h4>Zaalverhuur</h4>
		<p>
			U kunt onze Grote Seal huren voor bijeenkomsten zoals b.v. vergaderingen en bruiloften en
			bedrijfsevenementen.
		</p>
		<img src="images/article-6.png" />
		<p><a href="#">Vraag offerte aan &rarr;</a></p>
	</article>
</section>

<style>
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
</style>
