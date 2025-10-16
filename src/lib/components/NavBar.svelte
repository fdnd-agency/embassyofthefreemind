<header class="header">
  <div class="header__content">
    <img
      src="/logo/logo_white.svg"
      alt="Embassy of the Free Mind"
      class="logo"
    />
    <nav class="nav">
      <section class="nav__content nav__top">
        <div class="lang">EN ▼</div>
        <div class="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="white"
            stroke-width="1"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" placeholder="zoeken . . ." />
        </div>
        <div class="hamburger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke="white"
            fill="none"
            stroke-width="1"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </div>
      </section>
      <ul class="nav__content nav__list">
        <li class="nav__item">
          <a href="#">tickets en evenementen</a>
        </li>
        <li class="nav__item">
          <a href="#">bezoekersinformatie</a>
        </li>
        <li class="nav__item">
          <a href="#">collectie</a>
        </li>
        <li class="nav__item">
          <a href="#">online catalogus</a>
        </li>
        <li class="nav__item">
          <a href="#">word member</a>
        </li>
        <li class="nav__item">
          <a href="#">over ons</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

<style>
  header {
    position: fixed;
    width: 100%;
    font-family: var(--font-body);
    font-weight: 300;
    color: white;
    backdrop-filter: blur(50px);
    background: linear-gradient(
      180deg,
      hsla(64, 13%, 13%, 0.95) 0%,
      hsla(60, 6%, 38%, 0.536) 50%,
      hsla(60, 6%, 38%, 0.119) 80%,
      hsla(64, 13%, 46%, 0) 100%
    );
  }

  .header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    height: 8rem;
  }

  .logo {
    width: clamp(110px, 10vw, 165px);
    height: auto;
    display: block;
    object-fit: contain;
  }

  .nav {
    display: inherit;
    flex-direction: column;
    align-content: baseline;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .nav__content {
    font-size: 14px;
    gap: clamp(10px, 4vw, 60px);
    @media (min-width: 1130px) {
      font-size: 16px;
      background-image: none;
    }
  }

  .nav__top {
    display: inherit;
  }

  .lang {
    font-size: 21px;
    font-weight: 200;
  }

  ul {
    list-style: none;
  }

  .nav__list {
    display: inherit;
    margin: 0;
    margin-block-end: 0;
  }

  .nav__item {
    display: block;
    padding-bottom: 0.2rem;
    position: relative;
    text-wrap: nowrap;
  }

  .nav__item::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: width 0.3s ease-out;
  }

  .nav__item:hover::before {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>
