<section class="hero">
	<div class="hero__content">
		<h1>Vier 450 jaar</h1>
    <h2>Amsterdam in het huis met de hoofden</h2>
		<button class="hero__button">
			Meer lezen
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="22"
				height="22"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				viewBox="0 0 24 24"
			>
				<path d="M5 12h14M12 5l7 7-7 7" />
			</svg>
		</button>
	</div>

  <section class="info__line">
    <div class="info__adress">
      <p>
        123, Keizersgracht
      </p>
      <p>
        NL 1015 CJ Amsterdam
      </p>
    </div>
    <div class="info__time">
      <p>
        Wed. to Sat. 10.00-17.00h 
      </p>
      <p>
        Sun. 11.00-18.00h
      </p>
    </div>
  </section>

  <div class="hero__slides">
  </div>

	<div class="hero__dots">
		<button></button>
		<button></button>
		<button></button>
	</div>
</section>

<style>


/* === HERO SECTION === */
.hero {
	position: relative;
	width: 100%;
  height: 80vh;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background: url("/images/background.png") center center / cover no-repeat;
}

.hero::before {
	content: "";
	position: absolute;
	inset: 0;
	background: hsla(60, 12%, 13%, 0.512); 
	z-index: 1;
}

/* === BACKGROUND SLIDES === */
.hero__slides {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero__slides img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero__slides img.active {
  opacity: 1;
}

/* === HERO CONTENT === */
.hero__content {
  position: relative;
  z-index: 1;
  text-align: left;
  max-width: 80%;
  margin-inline: auto;
  padding: 0 1rem;
}

.hero__content h1,
.hero__content h2 {
  font-family: "Night Mango", serif;
  font-weight: 400;
  color: white;
}

.hero__content h1 {
  font-size: clamp(1.6rem, 6vw, 2.6rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: 0.01em;
}

.hero__content h2 {
  font-size: clamp(1.6rem, 4vw, 3rem);
  line-height: 1.2;
  font-weight: 300;
  margin-bottom: 2rem;
}

/* === CTA BUTTON === */
.hero__button {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: white;
  color: var(--color-text-dark, #0f0f0f);
  border: none;
  border-radius: 2rem;
  padding: 0.8rem 1.4rem;
  font-family: var(--font-body);
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.hero__button svg {
  width: 22px;
  height: 22px;
  stroke: currentColor;
  transition: transform 0.3s ease;

/* === INFORMATION LINE === */
.info__line {
  position: absolute;
  bottom: 2rem;
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 20px;
  padding: 2rem 6rem; 
  z-index: 2;
}

.info__line p {
  margin: 0;
}

.info__adress,
.info__time {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* === SLIDESHOW DOTS === */
.hero__dots {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.7rem;
  z-index: 2;
}

.hero__dots button {
  width: 10px;
  height: 10px;
  border-radius: 90%;
  border: none;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* === MEDIAQUERIES === */

@media (min-width: 700px) {
  .hero {
    height: 90vh;
  }

  .hero__content h1 {
    font-size: clamp(1.8rem, 6vw, 3.5rem);
  }

  .hero__button {
    margin: 0 auto;
  }

  .info__line {
    max-width: 80%;
  }
}

@media (min-width: 1000px) {
  .hero__content {
    max-width: 50%;
  }

  .hero__button {
    bottom: clamp(1vh, 4vh, -4vh);
    left: clamp(24rem, calc(5vw + 28rem), 35rem);
  }

  .info__line {
    max-width: 90%;
  }

  .info__adress,
  .info__time {
    gap: 2rem;
    flex-direction: row;
  }

}

</style>
