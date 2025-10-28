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

  <div class="hero__slides">
    <img src="/images/background.png" alt="Background 1" class="active" />
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

</style>
