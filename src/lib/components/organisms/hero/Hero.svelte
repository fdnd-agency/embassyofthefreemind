<script>
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';

  const SLIDE_DURATION = 5000; 

  const slides = [
    {
      title: 'Vier 450 jaar',
      subtitle: 'Amsterdam in het huis met de hoofden',
      image: '/images/background-1.png',
      alt: "Painting by William Blake titled Jacob's Ladder"
    },
    {
      title: 'Off planets perspective',
      subtitle: 'drawings by Joost Elffers',
      image: '/images/background-2.png',
      alt: 'Off planets perspective – drawings by Joost Elffers'
    },
    {
      title: 'Hidden knowledge',
      subtitle: 'mystieke boeken en symbolen',
      image: '/images/background-3.png',
      alt: 'Hidden knowledge exhibition'
    }
  ];

  let current = 0;
  const total = slides.length;
  let intervalId;
  function nextSlide() {
    current = (current + 1) % total;
  }

  function goToSlide(index) {
    current = index;
    resetInterval();
  }

	function goNext() {
  current = (current + 1) % total;
  resetInterval();
}

	function goPrev() {
		current = (current - 1 + total) % total;
		resetInterval();
	}

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, SLIDE_DURATION);
  }

  onMount(() => {
    intervalId = setInterval(nextSlide, SLIDE_DURATION);

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>


<section class="hero">
  <div class="hero-slides">
    {#each slides as slide, index}
      <img
        src={slide.image}
        alt={slide.alt}
        class:active={index === current}
      />
    {/each}
  </div>

  <div class="hero-overlay"></div>

	<div class="hero-content" bind:this={heroContentEl}>
		<p>hoogtepunten</p>

		<h1>{slides[current].title}</h1>
		<h2>{slides[current].subtitle}</h2>

		<div class="hero-arrows" bind:this={heroArrowsEl}>
			<button class="arrow-btn" on:click={() => goPrev()} aria-label="Vorige slide">
				<svg width="20" height="20" fill="none" stroke="white" stroke-width="1.5">
					<polyline points="12 4 7 10 12 16" />
				</svg>
			</button>

			<div class="hero-counter">
				{current + 1} <span>|</span> {total}
			</div>

			<button class="arrow-btn" on:click={() => goNext()} aria-label="Volgende slide">
				<svg width="20" height="20" fill="none" stroke="white" stroke-width="1.5">
					<polyline points="8 4 13 10 8 16" />
				</svg>
			</button>
		</div>
	</div>


  <section class="info-line" bind:this={infoLineEl}>
		<button class="hero-button">
      Tickets kopen
      <div class="arrow-circle">
        <span>
          <img
            src="images/arrow-exhibition-2.svg"
            height="18"
            width="18"
            alt="arrow"
          />
        </span>
      </div>
    </button>
    <div class="info-time">
      <p>Wed. to Sat. 10.00-17.00h</p>
      <p>Sun. 11.00-18.00h</p>
    </div>
  </section>

</section>

<style>
	/* === HERO SECTION === */
	.hero {
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		background: url('/images/background.png') center center / cover no-repeat;
		overflow-x: hidden;
	}

	.hero::before {
		content: '';
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
		text-wrap: balance;
	}

	.hero__content h1,
	.hero__content h2 {
		font-family: 'Night Mango', serif;
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

		.hero__content h2 {
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
