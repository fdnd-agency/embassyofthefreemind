<footer class="footer footer-center bg-base-200 text-base-content rounded p-10">
  <h1>Follow us</h1>
  <nav>
    <div class="grid grid-flow-col gap-4">
      <a class="social-media-link"
        href="https://www.instagram.com/embassyofthefreemind/"
        aria-label="Link to Instagram"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 50 50"
          class="fill-current"
        >
          <path
            d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
          ></path>
        </svg>
      </a>
      <a class="social-media-link"
        href="https://www.youtube.com/theritmanlibrary"
        aria-label="Link to Youtube"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
          ></path>
        </svg>
      </a>
      <a class="social-media-link"
        href="https://www.facebook.com/embassyofthefreemind/"
        aria-label="Link to Facebook"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          class="fill-current"
        >
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
          ></path>
        </svg>
      </a>
    </div>
  </nav>
  <nav class="grid gap-4 grid-columns">
    <a class="link link-hover" href="" aria-label="">Organisatie</a>
    <a class="link link-hover" href="" aria-label="">Pers</a>
    <a class="link link-hover" href="" aria-label="">Contact</a>
    <a class="link link-hover" href="" aria-label="">FAQ</a>
    <a class="link link-hover" href="" aria-label="">Bezoek voorwaarden</a>
    <a class="link link-hover" href="" aria-label="">Vacatures</a>
    <a class="link link-hover" href="" aria-label="">Privacybeleid</a>
  </nav>
</footer>

<style>
  .footer {
    row-gap: 1.5rem;
    font-size: 16px;
    overflow-y: hidden;
  }

  .p-10 {
    padding: 1.5rem;
  }

  .social-media-link{
    transition: transform .5s;
  }

  .social-media-link:hover{
     transform: scale(1.2);
  }

  @media only screen and (min-width: 600px) {
    .grid-columns {
      grid-auto-flow: column;
    }
  }

  @media only screen and (max-width: 600px) {
    .gap-4 {
      gap: 0.5rem;
    }
  }
</style>
