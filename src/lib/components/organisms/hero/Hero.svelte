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
	/* HERO SECTION */
	.hero {
		font-family: var(--font-body);
		font-weight: 100;
		position: relative;
		width: 100%;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		overflow-x: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background: hsla(0, 0%, 0%, 0.512);
		z-index: 1;
	}

	/* BACKGROUND SLIDES */
	.hero-slides {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.hero-slides img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}

	.hero-slides img.active {
		opacity: 1;
	}

	/* HERO CONTENT */
	.hero-content {
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: left;
		max-width: 100%;
		margin-inline: auto;
		padding: 0 2rem;
		padding-bottom: 6rem;
		text-wrap: balance;
		gap: 1rem;
	}

	.hero-content h1,
	.hero-content h2 {
		font-family: 'Night Mango', serif;
		font-weight: 400;
		color: white;
		margin: 0;
		line-height: 1.2;
	}

	.hero-content h1 {
		font-size: clamp(61px, 6vw, 160px);
	}

	.hero-content h2 {
		font-size: clamp(46px, 4vw, 85px);
		font-weight: 300;
	}

	/* INFORMATION LINE */
	.info-line {
		display: flex;
		flex-direction: column;
		color: white;
		font-family: var(--font-body);
		font-weight: 100;
		font-size: 20px;
		margin-top: 20rem;
    padding: 4rem 5rem 1rem 1rem;
		z-index: 2;
		gap: 3rem;
	}

	.info-line p {
		margin: 0;
	}

	.info-time {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	/* BUTTON */

	.hero-button {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 21px;
		background: white;
		color: var(--color-text-dark, #0f0f0f);
		border: none;
		border-radius: 2rem;
		height: 50px;
		min-width: 180px;
		white-space: nowrap;
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

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: hsla(60, 12%, 13%, 0.512);
		z-index: 1;
	}

	.hero-content,
	.info-line,
	.hero-navigation {
		position: relative;
		z-index: 2;
	}

	.hero-navigation {
		display: flex;
		align-items: center;
		gap: 1.5rem;
	}

	.hero-arrows {
		position: relative;
		display: flex;
		align-items: center;
		gap: 1.5rem;
		z-index: 3;
		font-family: var(--font-body);
		font-weight: 100;
		color: white;
	}

	.arrow-btn {
		background: none;
		border: none;
		color: white;
		font-size: 1.6rem;
		cursor: pointer;
		opacity: 0.8;
		transition: opacity 0.3s ease;
	}

	.arrow-btn:hover {
		opacity: 1;
	}

	.hero-counter {
		font-size: 1.1rem;
		display: flex;
		gap: 0.3rem;
		align-items: center;
		letter-spacing: 0.05em;
	}

	/* === MEDIAQUERIES === */

	@media (min-width: 700px) {
		.hero-content {
			max-width: 70%;
			margin-bottom: 0rem;
			margin-left: 61px;
			margin-top: 15rem;
			padding: 0 2rem;
		}

		.hero-content h1 {
			font-size: clamp(75px, 8.5vw, 175px);
			line-height: 0.9;
		}

		.hero-content h2 {
			line-height: 1.2;
		}

		.hero-button {
			bottom: -7vh;
		}

	}

	@media (min-width: 1000px) {
		.hero-content {
			max-width: 60%;
		}

		.hero-button {
			bottom: clamp(1vh, 4vh, -4vh);
			left: clamp(24rem, calc(5vw + 28rem), 35rem);
		}


	}

</style>
