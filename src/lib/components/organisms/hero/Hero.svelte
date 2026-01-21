<script>
  import { onMount, onDestroy } from 'svelte';

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
  let motionOK = true;

  function nextAuto() {
    current = (current + 1) % total;
  }

  function prevAuto() {
    current = (current - 1 + total) % total;
  }

  function startAutoplay() {
    if (!motionOK) return;
    stopAutoplay();
    intervalId = setInterval(nextAuto, SLIDE_DURATION);
  }

  function stopAutoplay() {
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
  }

  function resetAutoplay() {
    startAutoplay();
  }

  function userNext() {
    nextAuto();
    resetAutoplay();
  }

  function userPrev() {
    prevAuto();
    resetAutoplay();
  }

  onMount(() => {
    motionOK = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    startAutoplay();
  });

  onDestroy(() => {
    stopAutoplay();
  });
</script>

<section class="hero" aria-label="Highlights">
  <div class="hero-slides" aria-hidden="true">
    {#each slides as slide, index (slide.base)}
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
    {/each}
  </div>

  <div class="hero-overlay" aria-hidden="true"></div>

	<div class="hero-content" >
		<p>hoogtepunten</p>
		
		{#key current}
			<div class="hero-title">
				<h1>{slides[current].title}</h1>
				<h2>{slides[current].subtitle}</h2>
			</div>
		{/key}

		<div class="hero-arrows" >
			<button class="arrow-btn" type="button" on:click={userPrev}>
				<span class="sr-only">Previous slide</span>
				<svg aria-hidden="true" width="20" height="20" fill="none" stroke="white" stroke-width="1.5">
					<polyline points="12 4 7 10 12 16" />
				</svg>
			</button>

			<div class="hero-counter" aria-hidden="true">
				<p class="sr-only">Slide {current + 1} of {total}</p>
				{current + 1} <span>|</span> {total}
			</div>

			<button class="arrow-btn" type="button" on:click={userNext}>
				<span class="sr-only">Next slide</span>
				<svg aria-hidden="true" width="20" height="20" fill="none" stroke="white" stroke-width="1.5">
					<polyline points="8 4 13 10 8 16" />
				</svg>
			</button>
		</div>
	</div>


  <aside class="info-line">
		<a class="btn btn--gradient btn--blue hero-btn" href="/tickets">
			<span class="btn-label">Tickets kopen</span>
			<span class="btn-icon" aria-hidden="true">
				<img src="/images/arrow-exhibition-2.svg" alt=""/>
			</span>
		</a>
		<div class="info-time">
			<p>Wed. to Sat. 10.00-17.00h</p>
			<p>Sun. 11.00-18.00h</p>
		</div>
  </aside>

</section>


<style>

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

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
		background: var(--overlay-hero);
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

	.hero-slides img {
    object-fit: cover;
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
		opacity: 0;
		transition: opacity 1s ease-in-out;
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

	.hero-title {
		opacity: 0;
		animation: heroFadeIn 1.2s ease-in-out forwards;
	}

	@keyframes heroFadeIn {
		to { opacity: 1; }
	}

	.hero-content h1 {
		font-size: var(--font-size-2xl);
	}

	.hero-content h2 {
		font-size: var(--font-size-xl);
		font-weight: 300;
	}

	.hero-content p {	
		@media (min-width: 700px){
			padding-bottom: 1rem;
		}
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

	.hero-overlay {
		position: absolute;
		inset: 0;
		background: var(--overlay-warm);
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
		@media (min-width: 700px){
			padding-top: 1rem;
		}
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

		.hero-btn {
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

		.hero-btn {
			bottom: clamp(1vh, 4vh, -4vh);
			left: clamp(24rem, calc(5vw + 28rem), 35rem);
		}

	}

</style>
