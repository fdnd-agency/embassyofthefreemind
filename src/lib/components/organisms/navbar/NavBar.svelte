<header class="header">
  <section class="header-content">
    <a class="header-logo" href="/">
      <img
        src="/logo/logo_white.svg"
        alt="Embassy of the Free Mind"
        class="logo"
      />
    </a>

    <nav class="header-nav">
      <h2 class="sr-only">Hoofdnavigatie</h2>
      <ul class="nav-list">
        <li class="nav-item"><a class="nav-link" href="/">Collectie</a></li>
        <li class="nav-item"><a class="nav-link" href="/">Verhalen</a></li>
        <li class="nav-item"><a class="nav-link" href="/">Online catalogus</a></li>
        <li class="nav-item"><a class="nav-link" href="/">Over ons</a></li>
        <li class="nav-item"><a class="nav-link nav-link-strong" href="/">Tickets kopen</a></li>
      </ul>
    </nav>

    <section class="header-right">
      <details class="lang">
        <summary class="lang-btn">
          <span>EN</span>
          <svg
            aria-hidden="true"
            class="lang-caret caret"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            stroke="white"
            fill="none"
            stroke-width="1.5"
          >
            <polyline points="4 6 9 12 14 6" />
          </svg>
        </summary>

        <ul class="lang-menu">
          <li><a href="?lang=en">EN</a></li>
          <li><a href="?lang=nl">NL</a></li>
        </ul>
      </details>

      <details class="sidepanel-details">
        <summary class="hamburger-btn">
          <span class="sr-only">Open menu</span>
          <span aria-hidden="true"></span>
        </summary>

        <aside class="sidepanel">
          <div class="sidepanel-inner">
            <div class="sidepanel-search">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                stroke="white"
                fill="none"
                stroke-width="1.5"
              >
                <circle cx="9" cy="9" r="7" />
                <line x1="15" y1="15" x2="19" y2="19" />
              </svg>

              <label class="sr-only" for="nav-search">Search</label>
              <input id="nav-search" type="search" placeholder="Search . . ." />
            </div>

            <nav class="sidepanel-nav">
              <h2 class="sr-only">Menu</h2>
              <ul class="nav-list">
                <li class="nav-item"><a class="nav-link" href="/">Over ons</a></li>
                <li class="nav-item">
                  <a class="nav-link nav-link-strong" href="/">Bezoek en tickets</a>
                </li>
                <li class="nav-item"><a class="nav-link" href="/">Support de EFM</a></li>
                <li class="nav-item"><a class="nav-link" href="/">Agenda</a></li>

                <li class="nav-item submenu">
                  <details>
                    <summary class="submenu-toggle">
                      <span class="submenu-label">Collectie</span>
                      <svg
                        aria-hidden="true"
                        class="submenu-caret caret"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        stroke="white"
                        fill="none"
                        stroke-width="1.5"
                      >
                        <polyline points="4 6 9 12 14 6" />
                      </svg>
                    </summary>

                    <ul class="nav-list">
                      <li class="nav-item"><a class="nav-link" href="/">Exhibitions</a></li>
                      <li class="nav-item"><a class="nav-link" href="/">Collection</a></li>
                    </ul>
                  </details>
                </li>

                <li class="nav-item"><a class="nav-link" href="/">Research</a></li>

                <li class="nav-item submenu">
                  <details>
                    <summary class="submenu-toggle">
                      <span class="submenu-label">Academy</span>
                      <svg
                        aria-hidden="true"
                        class="submenu-caret caret"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        stroke="white"
                        fill="none"
                        stroke-width="1.5"
                      >
                        <polyline points="4 6 9 12 14 6" />
                      </svg>
                    </summary>

                    <ul class="nav-list">
                      <li class="nav-item"><a class="nav-link" href="/">Program</a></li>
                      <li class="nav-item"><a class="nav-link" href="/">Events</a></li>
                    </ul>
                  </details>
                </li>
              </ul>
            </nav>

            <div class="sidepanel-footer">
              <p>Wed. to Sat. 10.00-17.00h<br />Sun. 11.00-18.00h</p>
              <p>123, Keizersgracht<br />NL 1015 CJ Amsterdam</p>
            </div>
          </div>
        </aside>
      </details>
    </section>
  </section>
</header>

<style>

.header {
  position: fixed;
  z-index: 10;
  width: 100%;
  font-family: var(--font-body);
  font-weight: 300;
  color: white;
  background: hsla(0, 0%, 0%, 0.406);
  backdrop-filter: blur(18px);
}

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

summary::-webkit-details-marker {
  display: none;
}

summary {
  list-style: none;
}

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    scroll-behavior: auto !important;
  }
}

/* ------------------------------------------------------------------ */
/* ----------------------------- Nav -------------------------------- */
/* ------------------------------------------------------------------ */

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  font-size: 14px;
  text-wrap: nowrap;

  @media (min-width: 1200px) {
    font-size: 16px;
  }
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 300;
}

.nav-link-strong {
  font-weight: 600;
}

.nav-link,
.submenu-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  padding-bottom: 0.2rem;
}

.nav-link::after,
.submenu-toggle::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s ease-out;
}

.nav-item:hover > .nav-link::after,
.nav-item:focus-within > .nav-link::after,
.submenu > details:hover > .submenu-toggle::after,
.submenu > details:focus-within > .submenu-toggle::after {
  width: 100%;
}

.submenu > details[open] > .submenu-toggle::after {
  width: 0;
  transition: none;
}

/* ------------------------------------------------------------------ */
/* -------------------------- Header layout ------------------------- */
/* ------------------------------------------------------------------ */

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: clamp(0.5rem, 3vw, 2.5rem);
  padding-block: 0.75rem;
  transition: all 0.2s ease-in-out;
}

.header-logo {
  width: clamp(90px, 10vw, 105px);
  display: inline-flex;
}

.logo {
  width: clamp(90px, 10vw, 105px);
  object-fit: contain;
}

.header-nav {
  flex: 2;
  display: none;
  justify-content: center;

  @media (min-width: 900px) {
    display: flex;
  }
}

.header-nav .nav-list {
  display: flex;
  align-items: center;
  gap: clamp(10px, 4vw, 60px);
}

.header-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.75rem;
}

/* ------------------------------------------------------------------ */
/* ------------------------- Language menu -------------------------- */
/* ------------------------------------------------------------------ */

.lang {
  position: relative;
  user-select: none;
}

.lang-btn {
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.lang-btn:hover span,
.lang-btn:hover .caret {
  opacity: 0.7;
}

.lang-menu {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: #0b0c0e;
  padding: 0.5rem 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  list-style: none;
}

.lang-menu a {
  display: block;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
  font-size: 0.9rem;
}

.lang-menu a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.caret {
  display: inline-block;
  transition: transform 0.3s ease;
  transform-origin: center;
  font-size: 1.2rem;
  opacity: 0.8;
}

/* ------------------------ Hamburger ------------------------ */

.hamburger-btn {
  width: 30px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  z-index: 102;
  background: none;
  border: none;
  color: inherit;
}

.hamburger-btn > span[aria-hidden="true"] {
  position: relative;
  width: 100%;
  height: 1.5px;
  background: white;
  transition: all 0.35s ease;
}

.hamburger-btn > span[aria-hidden="true"]::before,
.hamburger-btn > span[aria-hidden="true"]::after {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 1.5px;
  background: white;
  transition: all 0.35s ease;
}

.hamburger-btn > span[aria-hidden="true"]::before {
  top: -9px;
}

.hamburger-btn > span[aria-hidden="true"]::after {
  top: 10px;
}

.sidepanel-details[open] .hamburger-btn > span[aria-hidden="true"] {
  background: transparent;
}

.sidepanel-details[open] .hamburger-btn > span[aria-hidden="true"]::before {
  transform: rotate(45deg);
  top: 0;
}

.sidepanel-details[open] .hamburger-btn > span[aria-hidden="true"]::after {
  transform: rotate(-45deg);
  top: 0;
}

/* ------------------------------------------------------------------ */
/* -------------------------- Sidepanel ----------------------------- */
/* ------------------------------------------------------------------ */

.sidepanel-details {
  position: relative;
}

.sidepanel {
  position: fixed;
  display: flex; flex-direction: column;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: hsl(0, 0%, 3%);
  backdrop-filter: blur(20px);
  filter: drop-shadow(-6px 1px 20px #141414cc);
  transform: translateX(120%);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.35s ease-out, opacity 0.35s ease-out;
  z-index: 20;

  @media (min-width: 650px) {
    width: min(400px, 85vw);
  }
}

.sidepanel-details[open] .sidepanel {
  transform: translateX(0%);
  opacity: 1;
  pointer-events: auto;
}

.sidepanel-inner {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  box-sizing: border-box;
  min-height: 0;
  padding: 5rem 2rem 2rem;
  opacity: 0;
  transform: translateY(50%);
  color: white;
  transition: transform 250ms ease-out, opacity 0.9s ease-in;
  transition-delay: 250ms;
}

.sidepanel-details[open] .sidepanel-inner {
  transform: translateX(0%);
  opacity: 1;
}

/* Search */
.sidepanel-search {
  display: flex;
  align-items: center;
  width: 60%;
  gap: 0.75rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 0.5rem;
}

.sidepanel-search input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
}

/* Sidepanel nav layout */
.sidepanel-nav .nav-list {
  display: inline-flex;
  flex-direction: column;
  gap: 3rem;
}

/* Submenu */
.submenu details {
  display: block;
}

.submenu-caret {
  opacity: 0.7;
}

.submenu details[open] .submenu-caret,
.lang[open] .lang-caret {
  transform: rotate(180deg);
}

.submenu .nav-list {
  padding-top: 2.5rem;
}

/* ------------------------ Footer ------------------------ */

.sidepanel-footer {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.75rem;
  text-align: right;
}

</style>
