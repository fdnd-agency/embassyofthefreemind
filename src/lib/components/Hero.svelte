<section class="hero">
	<div class="hero__content">
    <h1>Vier 450 jaar</h1>
    <h2>Amsterdam in het huis met de hoofden</h2>
		<button class="hero__button">
			Meer lezen
      <div class="arrow-circle">
        <span><img src="images/arrow-exhibition-2.svg" height="18" width="18" alt="arrow" /></span
        >
      </div>
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
    <img src="/images/background.png" alt="Painting by William Blake titled Jacob's Ladder" class="active" />
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
	min-width: 100vw;
  min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	background: url("/images/background.png") center center / cover no-repeat;
  overflow-x: hidden;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  margin-inline: auto;
  margin-bottom: -4rem;
  padding: 0 2rem;
  text-align: justify;
}

.hero__content h1,
.hero__content h2 {
  font-family: "Night Mango", serif;
  font-weight: 400;
  color: white;
  margin: 0;
  line-height: 1.2;
}

.hero__content h1 {
  font-size: clamp(61px, 6vw, 160px);
}

.hero__content h2 {
  font-size: clamp(46px, 4vw, 85px);
  font-weight: 300;
}

/* === CTA BUTTON === */

.hero__button {
  position: absolute;
  bottom: -7vh; 
  left: 2rem;  
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 21px;
  background: white;
  color: var(--color-text-dark, #0f0f0f);
  border: none;
  border-radius: 2rem;
  height: 56px;
  min-width: 180px;
  padding: 6px 7px 6px 1.5rem;
  font-family: var(--font-body);
  font-size: 1rem;
  cursor: pointer;
}

.arrow-circle {
		background-color: #002646;
		color: white;
		width: 40.78px;
		height: 42.05px;
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

  .arrow-circle span {
		transform: translateY(2px);
		display: block;
	}

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
  .hero__content {
    max-width: 70%;
    margin-bottom: 0rem;
    margin-left: 61px;
    margin-top: 15rem;
    padding: 0 2rem;
  }

  .hero__content h1 {
    font-size: clamp(75px, 8.5vw, 175px);
    line-height: 0.9;
  }

  .hero__content h2{
    line-height: 1.2;
  }

  .hero__button {
    bottom: -7vh; 
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
