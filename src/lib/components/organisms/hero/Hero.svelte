<script>
  import { onMount, onDestroy } from 'svelte';
  import { gsap } from 'gsap';

  const SLIDE_DURATION = 5000;

  const slides = [
    {
      title: 'Vier 450 jaar',
      subtitle: 'Amsterdam in het huis met de hoofden',
      base: '/images/hero/background-1',
      alt: "Painting by William Blake titled Jacob's Ladder"
    },
    {
      title: 'Off planets perspective',
      subtitle: 'drawings by Joost Elffers',
      base: '/images/hero/background-2',
      alt: 'Off planets perspective - drawings by Joost Elffers'
    },
    {
      title: 'Hidden knowledge',
      subtitle: 'mystieke boeken en symbolen',
      base: '/images/hero/background-3',
      alt: 'Hidden knowledge exhibition'
    }
  ];

  let current = 0;
  const total = slides.length;
  let intervalId;

  let heroContentEl;
  let infoLineEl;
  let heroArrowsEl;
  let heroTl;

  const mod = (n, m) => ((n % m) + m) % m;
  const prevIndex = () => mod(current - 1, total);
  const nextIndex = () => mod(current + 1, total);

  function nextSlide() {
    current = (current + 1) % total;
  }

  function resetInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, SLIDE_DURATION);
  }

  function goNext() {
    current = (current + 1) % total;
    resetInterval();
  }

  function goPrev() {
    current = (current - 1 + total) % total;
    resetInterval();
  }

  function isRenderable(index) {
    return index === current || index === prevIndex() || index === nextIndex();
  }

  onMount(() => {
    intervalId = setInterval(nextSlide, SLIDE_DURATION);

    heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    heroTl
      .from(heroContentEl, { y: 40, opacity: 0, duration: 0.9 })
      .from(heroArrowsEl, { y: 20, opacity: 0, duration: 0.6 }, '-=0.5')
      .from(infoLineEl, { y: 40, opacity: 0, duration: 0.9 }, '-=0.3');
  });

  onDestroy(() => {
    clearInterval(intervalId);
    if (heroTl) heroTl.kill();
  });
</script>

<section class="hero">
  <div class="hero-slides" aria-hidden="true">
    {#each slides as slide, index (slide.base)}
      {#if isRenderable(index)}
        <picture class:active={index === current}>

          <source
            type="image/avif"
            srcset="
              {slide.base}-960.avif 960w,
              {slide.base}-1600.avif 1600w,
              {slide.base}-1920.avif 1920w
            "
            sizes="100vw"
          />

          <source
            type="image/webp"
            srcset="
              {slide.base}-960.webp 960w,
              {slide.base}-1600.webp 1600w,
              {slide.base}-1920.webp 1920w
            "
            sizes="100vw"
          />

          <img
            src="{slide.base}.png"
            alt={slide.alt}
            decoding="async"
            fetchpriority={index === 0 ? 'high' : 'auto'}
            loading={index === 0 ? 'eager' : 'lazy'}
            class:active={index === current}
          />
        </picture>
      {/if}
    {/each}
  </div>

  <div class="hero-overlay"></div>

	<div class="hero-content" bind:this={heroContentEl}>
		<p>hoogtepunten</p>

		<div class="hero-title">
			<h1>{slides[current].title}</h1>
			<h2>{slides[current].subtitle}</h2>
		</div>

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
            src="/images/arrow-exhibition-2.svg"
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
		flex-direction: column;
		align-items: flex-end;
    justify-content: space-evenly;
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

	.hero-slides picture,
	.hero-slides img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}

	.hero-slides img {
		object-fit: cover;
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}

	.hero-slides img.active {
		opacity: 1;
	}

	/* HERO CONTENT */
	.hero-content {
		z-index: 2;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		align-self: flex-start;
		justify-content: space-between;
		max-width: 30rem;
		margin-inline: 1rem;
		text-wrap: balance;
		gap: 1rem;
		height: clamp(20rem, 50vh, 50rem);
		padding: 1rem 1rem 0rem;
		margin-top: 4rem;
		padding-right: 3rem;
		margin-inline: 1rem;
	}

	.hero-content > p {
		flex: 0 0 auto;
		margin: 0;
	}

	.hero-title {
		flex: 1 1 auto;
		min-height: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 0;
	}

	.hero-title h1,
	.hero-title h2 {
		overflow: visible;
		text-overflow: clip; 
		font-family: var(--font-display);
		font-weight: 400;
		color: white;
		margin: 0;
		line-height: 1;
	}

	.hero-title h1 {
		font-size: clamp(3.8rem, 6vw, 10rem);
	}

	.hero-title h2 {
    font-size: clamp(2.8rem, 4vw, 5.3rem);
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
    padding-right: 1rem;
		z-index: 2;
		gap: 1rem;
	}

	.info-line p {
		font-size: clamp(1rem, 1.2vw, 1.125rem);
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
	.info-line {
		position: relative;
		z-index: 2;
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
		flex: 0 0 auto;
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
		.hero {
			flex-direction: row;
			align-items: flex-start;
			justify-content: center;
			gap: min(0.5rem, 4vw);
		}

		.hero-content {
			align-self: center;
			max-width: 60%;
			margin-left: 3vw;
			margin-top: 17rem;
			margin-bottom: 1rem;
			padding: 0 1rem;
			height: 60vh;
		}

		.hero-content h1 {
			font-size: clamp(75px, 8.5vw, 175px);
			line-height: 1;
		}

		.hero-content h2 {
			line-height: 1.2;
		}

		.hero-button {
			bottom: -7vh;
		}

		.info-line {
			gap: 3rem;
			margin-top: 30rem;
			padding: 2rem;
		}

	}

	@media (min-height: 1000px) and (min-width: 700px){
		.hero {
			min-height: 100vh;
		}

		.hero-content {
			height: 45vh;
			margin-top: 20rem;
		}

		.info-line {
			margin-top: 40rem;
		}
	}

	@media (min-width: 1000px) {

		.info-line {
			padding: 4rem 5rem 1rem 1rem;
		}

		.hero-content {
			max-width: 50%;
			height: 55vh;
		}

		.hero-button {
			bottom: clamp(1vh, 4vh, -4vh);
			left: clamp(24rem, calc(5vw + 28rem), 35rem);
		}

	}

</style>
