<script>
  import { onMount } from 'svelte';
  import gsap from 'gsap';

  let wrap;

  onMount(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".cardCont").forEach((card) => {
        gsap.set(card, {
          transformStyle: "preserve-3d",
          transformPerspective: 1000
        });

        const q = gsap.utils.selector(card);
        const front = q(".cardFront");
        const back = q(".cardBack");

        gsap.set(card, { rotationY: 0, rotationX: 0, rotationZ: 0, z: 0 });
        gsap.set(back, { rotationY: -180 });

        const tl = gsap.timeline({ paused: true })
        .to(card, { duration: 0.15, rotationZ: -12, rotationX: 10, ease: "power4.out" }, 0)
        .to(card, { duration: 1.1, rotationY: 720, ease: "expo.inOut" }, 0)
        .to(card, { duration: 0.25, rotationZ: 14, rotationX: -12, ease: "power4.inOut" }, 0.2)
        .to(card, { duration: 0.18, rotationZ: -8, rotationX: 8, ease: "power4.inOut" }, 0.5)
        .to(card, { duration: 0.22, rotationZ: 0, rotationX: 0, ease: "elastic.out(1, 0.6)" }, 0.85)
        .to(card, { duration: 0.25, z: 120, ease: "power3.out" }, 0.1)
        .to(card, { duration: 0.35, z: 0, ease: "power3.inOut" }, 0.6)
        .to(front, { duration: 0.35, rotationY: 180, ease: "power2.inOut" }, 0.78)
        .to(back,  { duration: 0.35, rotationY: 0,   ease: "power2.inOut" }, 0.78)
        .to(card,  { duration: 0.08, x: -6, y: 2, ease: "power1.inOut" }, 0.92)
        .to(card,  { duration: 0.08, x: 6,  y: -2, ease: "power1.inOut" }, 1.00)
        .to(card,  { duration: 0.10, x: 0,  y: 0, ease: "power2.out" }, 1.08);

        const isTouch = window.matchMedia('(hover: none)').matches;

        if (isTouch) {
        card.addEventListener('click', () => {
            tl.reversed() ? tl.play(0) : tl.reverse();
        });
        } else {
        card.addEventListener('mouseenter', () => tl.play(0));
        card.addEventListener('mouseleave', () => tl.reverse());
        }

      });
    }, wrap);

    return () => ctx.revert(); 
  });
</script>

<section class="intro-cardflip">
  <h2>Crazy Punk Card Flip </h2>
  <p>Hover over or tap the cards to see the flip animation.</p>

  <div id="mainWrap" bind:this={wrap}>
    <div class="cardCont">
      <div class="cardBack">
            <p>Freedom Of Conscience</p>
            <p>15 oktober 2024 t/m 10 januari 2025</p>
            <p>Exhibition</p>
      </div>
      <div class="cardFront"></div>
    </div>

    <div class="cardCont">
      <div class="cardBack playcardBack">
            <p>Freedom Of Conscience</p>
            <p>12 januari 2025 t/m 15 januari 2025</p>
            <p>Exhibition</p>
      </div>
      <div class="cardFront playcardFront"></div>
    </div>
  </div>
</section>

<style>
  .intro-cardflip { 
    display: grid; 
    place-items: center;
    height: 70vh; 
    gap: 2rem; 
    padding: 3rem 1rem; 
    h2 {
        padding: 5rem;
    }
    @media ( min-width: 1040px) {
        height: 70vh;
    }
}
  #mainWrap { 
    display: flex; 
    gap: 1rem; 
    flex-wrap: wrap; 
    justify-content: center;
}

  .cardCont {
    width: 250px;
    height: 400px;
    position: relative;
    cursor: pointer;
    color: white;
    text-align: center;
  }

  .cardFront, .cardBack {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    background-size: cover;
    background-position: center;
    display: grid;
    place-items: center;
    background-color: rgb(109, 98, 67);
  }

  .cardFront { background-image: url('https://embassyofthefreemind.com/images/Poster_Gewetensvrijheid.png'); }

  .playcardFront { background-image: url("https://embassyofthefreemind.com/images/Poster_Gewetensvrijheid.png"); }

</style>
