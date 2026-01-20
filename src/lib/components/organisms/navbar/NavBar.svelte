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
        <li class="nav-item"><a class="nav-link" href="#">Collectie</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Verhalen</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Online catalogus</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Over ons</a></li>
        <li class="nav-item"><a class="nav-link nav-link-strong" href="#">Tickets kopen</a></li>
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
                <li class="nav-item"><a class="nav-link" href="#">Over ons</a></li>
                <li class="nav-item"><a class="nav-link" href="#" style="font-weight: 600">Bezoek en tickets</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Support de EFM</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Agenda</a></li>
                <li class="nav-item submenu">
                  <details>
                    <summary class="submenu-toggle">
                      <span>Collectie</span>
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
                      <li class="nav-item"><a class="nav-link" href="#">Tentoonstellingen</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Collectiestukken</a></li>
                    </ul>
                  </details>
                </li>

                <li class="nav-item"><a class="nav-link" href="#">Research</a></li>

                <li class="nav-item submenu">
                  <details>
                    <summary class="submenu-toggle">
                      <span>Academy</span>
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
                      <li class="nav-item"><a class="nav-link" href="#">Programma</a></li>
                      <li class="nav-item"><a class="nav-link" href="#">Events</a></li>
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
header {
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

@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    scroll-behavior: auto !important;
  }
}

summary::-webkit-details-marker {
  display: none;
}

summary {
  list-style: none;
}

/* ---------------- HEADER LAYOUT ---------------- */

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

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.header-nav .nav-list {
  display: flex;
  gap: clamp(10px, 4vw, 60px);
  list-style: none;
  align-items: center;
}

.nav-item {
  font-size: 14px;
  padding-bottom: 0.2rem;
  position: relative;
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

/* underline */

.nav-item::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: white;
  transition: width 0.3s ease-out;
}

.nav-item:hover::before {
  width: 100%;
}

.nav-item.submenu:has(details[open])::before,
.nav-item.submenu:has(details[open]):hover::before {
  width: 0;
}

.nav-item.submenu:has(details[open])::before {
  transition: none;
}

.header-right {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1.75rem;
}

/* ---------------- LANGUAGE MENU (details) ---------------- */

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

.lang-menu li {
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

/* rotate caret when open */
.lang[open] .lang-caret {
  transform: rotate(180deg);
}

/* ---------------- HAMBURGER (summary) ---------------- */

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

/* ---------------- SIDEPANEL (details) ---------------- */

.sidepanel-details {
  position: relative;
}

/* closed state */
.sidepanel {
  position: fixed;
  display: flex;
  flex-direction: column;
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
}

/* open state */
.sidepanel-details[open] .sidepanel {
  transform: translateX(0%);
  opacity: 1;
  pointer-events: auto;
}

/* SIDEPANEL CONTENT */
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

/* Menu */
.sidepanel-nav .nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  flex-direction: column;
  gap: 3rem;
}

.nav-list .nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 300;
}

/* Submenu details */
.submenu details {
  display: block;
}

.submenu-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
}

.submenu-caret {
  opacity: 0.7;
}

.submenu details[open] .submenu-caret {
  transform: rotate(180deg);
}

 .submenu .nav-list {
  padding-top: 2.5rem;
}

/* Footer */
.sidepanel-footer {
  margin-top: auto;             
  display: flex;
  flex-direction: column;
  justify-content: flex-end;    
  gap: 0.75rem;
  text-align: right;
}

@media (min-width: 650px) {
  .sidepanel {
    width: min(400px, 85vw);
  }
}

</style>
