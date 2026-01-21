

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
            <p>15 oktober 2024 t/m 10 januari 2025</p>
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
    height: 100vh; 
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
