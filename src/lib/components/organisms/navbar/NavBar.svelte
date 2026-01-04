<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';

  let isLangOpen = false;
  let isSidepanelOpen = false;
  let isCollectieOpen = false;
  let isAcademyOpen = false;
  
  let leftTop;
  let leftCross;
  let rightBottom;
  let frameEl;
  let topBow;
  let bottomDecor;
  let ladyLeft;
  let ladyRight;
  let navEl;
  let footerEl;


  let crossTl;
  let ornamentsTl;

  function toggleLang() {
    isLangOpen = !isLangOpen;
  }

  function toggleSidepanel() {
    isSidepanelOpen = !isSidepanelOpen;
  }

  function toggleCollectie() {
    isCollectieOpen = !isCollectieOpen;
  }

  function toggleAcademy() {
    isAcademyOpen = !isAcademyOpen;
  }


  function closeAll() {
    isLangOpen = false;
    isSidepanelOpen = false;
    isCollectieOpen = false;
    isAcademyOpen = false;
  }

  onMount(() => {
    if (!leftCross) return;

    gsap.set(leftCross, {
      transformOrigin: '50% 0%',
      rotation: -20
    });
  });

  $: if (isSidepanelOpen && leftCross) {
    if (!crossTl) {
      crossTl = gsap.fromTo(leftCross,
      { rotation: -20 },
      {
        rotation: 20,
        duration: 0.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        transformOrigin: '50% 0%'
      }
    );
    }  else {
    crossTl.restart(); 
    }
  } else if (crossTl && leftCross) {
    crossTl.pause();
    gsap.set(leftCross, { rotation: 0 });
  }

  $: if (isSidepanelOpen && leftTop && leftCross && rightBottom && frameEl && bottomDecor && topBow && ladyLeft && ladyRight && navEl && footerEl) {
    if (!ornamentsTl) {
      ornamentsTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      ornamentsTl.from([leftTop, leftCross], {
        y: -80,           
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        delay: 0.5,       
      });

      ornamentsTl.from(
        rightBottom,
        {
          y: 80,          
          opacity: 0,
          duration: 0.8
        },
        '-=0.5'         
      );
      
      ornamentsTl.from(
      frameEl,
      {
        y: 60,
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      },
      '-=0.47'
      );

      ornamentsTl.from(
      topBow,
      {
        y: -40,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.3' 
    );
    
    ornamentsTl.from(
      bottomDecor,
      {
        scaleX: 0,
        opacity: 0,
        duration: 0.6,
        transformOrigin: '50% 50%', 
        ease: 'power2.out'
      },
      '-=0.5'
    );

    ornamentsTl.from(
      ladyLeft,
      {
        x: 40,      
        opacity: 0,   
        duration: 0.8,
        ease: 'power2.out'
      },
      '-=0.2'
    );

    ornamentsTl.from(
      ladyRight,
      {
        x: -40,       
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      },
      '-=0.75'        
    );

    ornamentsTl.from(
      navEl,
      {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.out'
      },
      '-=0.1' 
    );

    ornamentsTl.from(
      footerEl,
      {
        y: 20,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out'
      },
      '>-0.1' 
    );

    } else {
      ornamentsTl.restart();
    }
  } else if (ornamentsTl) {
    ornamentsTl.pause(0);
  }
</script>

<svelte:window on:click={closeAll} />

<header class="header">
  <section class="header-content">
    <div class="header-logo">
      <img src="/logo/logo_white.svg" alt="Embassy of the Free Mind" class="logo" />
    </div>

    <nav class="header-center">
      <ul class="nav-pages">
        <li class="nav-item"><a href="#">Collectie</a></li>
        <li class="nav-item"><a href="#">Verhalen</a></li>
        <li class="nav-item"><a href="#">Online catalogus</a></li>
        <li class="nav-item"><a href="#">Over ons</a></li>
        <li class="nav-item"><a href="#" style="font-weight:bold;">Tickets kopen</a></li>
      </ul>
    </nav>

    <section class="header-right">
      <div class="lang" on:click|stopPropagation>
        <button
          class="lang-btn"
          aria-expanded={isLangOpen}
          aria-controls="lang-menu"
          on:click={toggleLang}
        >
          <span>EN</span> 
          <svg class="lang-caret caret" xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="white" fill="none" stroke-width="1.5">
            <polyline points="4 6 9 12 14 6" />
          </svg>
        </button>

        <ul id="lang-menu" class="lang-menu" hidden={!isLangOpen}>
          <li><a href="?lang=en">EN</a></li>
          <li><a href="?lang=nl">NL</a></li>
        </ul>
      </div>

      <button
        class="hamburger-btn"
        type="button"
        aria-controls="sidepanel"
        aria-expanded={isSidepanelOpen}
        aria-haspopup="dialog"
        aria-label={isSidepanelOpen ? 'Sluit menu' : 'Open menu'}
        on:click|stopPropagation={toggleSidepanel}
      >
        <span aria-hidden="true"></span>
      </button>

      <aside
        id="sidepanel"
        class="sidepanel"
        class:open={isSidepanelOpen}
        hidden={!isSidepanelOpen}
        on:click|stopPropagation
      >
        <div class="sidepanel-inner">

          <img
            src="images/decoration-left-1.png"
            alt=""
            class="sidepanel-ornament sidepanel-ornament--left-top"
            bind:this={leftTop}
          />

          <img
            src="images/decoration-left-smallcross.png"
            alt=""
            class="sidepanel-ornament sidepanel-ornament--left-cross"
            bind:this={leftCross}
          />

          <img
            src="images/decoration-right-bottom.png"
            alt=""
            class="sidepanel-ornament sidepanel-ornament--right-bottom"
            bind:this={rightBottom}
          />

          <div class="sidepanel-center">
            <img
              src="images/top-bow-decoration.png"
              alt=""
              class="ornament-top"
              bind:this={topBow}
            />
            
            <img
              src="images/center-frame-background.png"
              alt=""
              class="ornament-frame"
              bind:this={frameEl}
            />

            <img
              src="images/lady-head-left.png"
              alt=""
              class="sidepanel-ornament sidepanel-ornament--lady-left"
              bind:this={ladyLeft}
            />

            <img
              src="images/lady-head-right.png"
              alt=""
              class="sidepanel-ornament sidepanel-ornament--lady-right"
              bind:this={ladyRight}
            />

            <div class="sidepanel-center-content" bind:this={navEl}>
              <div class="sidepanel-search">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="white" fill="none" stroke-width="1.5">
                  <circle cx="9" cy="9" r="7" />
                  <line x1="15" y1="15" x2="19" y2="19" />
                </svg>
                <input type="text" placeholder="Search . . ." />
              </div>

              <nav class="sidepanel-nav">
                <ul>
                  <li><a href="#">Over ons</a></li>
                  <li><a href="#"><strong>Bezoek en tickets</strong></a></li>
                  <li><a href="#">Support de EFM</a></li>
                  <li><a href="#">Agenda</a></li>
                  <li class="submenu">
                    <button
                      type="button"
                      class="submenu-toggle"
                      aria-expanded={isCollectieOpen}
                      aria-controls="submenu-collectie"
                      on:click|stopPropagation={toggleCollectie}
                    >
                      <span>Collectie</span>
                      <svg
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
                    </button>
                    <ul
                      id="submenu-collectie"
                      class="submenu-menu"
                      hidden={!isCollectieOpen}
                    >
                      <li><a href="#">Tentoonstellingen</a></li>
                      <li><a href="#">Collectiestukken</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Research</a></li>
                  <li class="submenu">
                    <button
                      type="button"
                      class="submenu-toggle"
                      aria-expanded={isAcademyOpen}
                      aria-controls="submenu-academy"
                      on:click|stopPropagation={toggleAcademy}
                    >
                      <span>Academy</span>
                      <svg
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
                    </button>
                    <ul
                      id="submenu-academy"
                      class="submenu-menu"
                      hidden={!isAcademyOpen}
                    >
                      <li><a href="#">Programma</a></li>
                      <li><a href="#">Events</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <img
              src="images/center-bottom-decoration.png"
              alt=""
              class="ornament-bottom"
              bind:this={bottomDecor}
            />
          </div>
        
          <div class="sidepanel-footer" bind:this={footerEl}>
            <p>
              Wed. to Sat. 10.00–17.00h<br />
              Sun. 11.00–18.00h
            </p>
            <p>
              123, Keizersgracht<br />
              NL 1015 CJ Amsterdam
            </p>
          </div>
        </div>
      </aside>
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
    background-color: #0b0c0e;
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
    flex: 1;
    width: clamp(90px, 10vw, 105px);
  }

  .logo {
    width: clamp(90px, 10vw, 105px);
    object-fit: contain;
  }

  .header-center {
    flex: 2;
    display: none;
    justify-content: center;
  }

  .nav-pages {
    display: flex;
    gap: clamp(10px, 4vw, 60px);
    list-style: none;
  }

  .nav-item {
    font-size: 14px;
    padding-bottom: 0.2rem;
    position: relative;
    text-wrap: nowrap;
  }

  @media (min-width: 1200px) {
    .nav-item {
      font-size: 16px;
    }
  }

  .nav-item a {
    color: white;
    text-decoration: none;
  }

  .nav-item::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: width 0.3s ease-out;
  }

  .nav-item:hover::before {
    width: 100%;
  }

  .header-right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1.75rem;
  }

  /* ---------------- LANGUAGE MENU ---------------- */

  .lang,
  .lang-menu,
  .lang-menu li {
    user-select: none;
  }

  .lang {
    position: relative;
  }

  .lang-btn {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: .3rem;
  }

  .lang-btn:hover span,
  .lang-btn:hover .caret {
    opacity: 0.7;
  }

  .lang-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: .5rem;
    background: #0b0c0e;
    padding: .5rem 0;
    border: 1px solid rgba(255,255,255,0.15);
  }

  .lang-menu[hidden] {
    display: none;
  }

  .lang-menu li {
    list-style: none;
  }

  .lang-menu a {
    display: block;
    padding: .5rem 1rem;
    color: white;
    text-decoration: none;
    font-size: .9rem;
  }

  .lang-menu a:hover {
    background: rgba(255,255,255,.1);
  }

  .caret {
    display: inline-block;
    transition: transform 0.3s ease;
    transform-origin: center;
    font-size: 1.2rem;
    opacity: 0.8;
  }

  .lang-btn[aria-expanded="true"] .caret {
    transform: rotate(180deg);
  }

  /* ---------------- HAMBURGER BUTTON ---------------- */

  .hamburger-btn {
    width: 38px;
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

  .hamburger-btn span {
    position: relative;
    width: 100%;
    height: 1.5px;
    background: white;
    transition: all 0.35s ease;
  }

  .hamburger-btn span::before,
  .hamburger-btn span::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1.5px;
    background: white;
    transition: all 0.35s ease;
  }

  .hamburger-btn span::before {
    top: -9px;
  }

  .hamburger-btn span::after {
    top: 10px;
  }

  /* maak X wanneer open */

  .hamburger-btn[aria-expanded="true"] span {
    background: transparent;
  }

  .hamburger-btn[aria-expanded="true"] span::before {
    transform: rotate(45deg);
    top: 0;
  }

  .hamburger-btn[aria-expanded="true"] span::after {
    transform: rotate(-45deg);
    top: 0;
  }

  /* ---------------- SIDEPANEL ---------------- */

.sidepanel {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  background: rgba(16, 23, 35, 0.6);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  transform: translateX(120%);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.35s ease-out, opacity 0.35s ease-out;
}

.sidepanel[hidden] {
  display: block;     
  transform: translateX(120%);
  opacity: 0;
  pointer-events: none;
}

.sidepanel.open {
  transform: translateX(0%);
  opacity: 1;
  pointer-events: auto;
}

.sidepanel-inner {
  position: relative;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  overflow-y: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  color: white;

  opacity: 0;
  transform: translateY(40px);
  transition: transform 0.45s ease-out, opacity 0.45s ease-out;
}

.sidepanel.open .sidepanel-inner {
  opacity: 1;
  transform: translateY(0);
}

/* ---------- middenstuk met frame + content ---------- */

.sidepanel-center {
  height: 100%;
  width: clamp(20rem, 40vw, 40rem);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.sidepanel-center-content {
  position: relative;
  top: 200px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
}

/* groot frame achter search + menu */

.ornament-frame {
  position: absolute;
  margin: auto;
  width: 780px;
  height: 840px;
  object-fit: contain;
  opacity: 0.85;
  z-index: 1;
  pointer-events: none;
}

.ornament-top,
.ornament-bottom {
  position: absolute;
  object-fit: contain;
  z-index: 2;
  pointer-events: none;
}

.ornament-top {
  width: min(650px, 90vw);
  margin-bottom: 2rem;
}

.ornament-bottom {
  width: min(500px, 80vw);
  bottom: -380px;
}


/* ---------- ornamenten rondom het geheel ---------- */

.sidepanel-ornament {
  position: absolute;
  pointer-events: none;
  user-select: none;
}

@media (min-width: 900px) {
  .header-center {
    display: flex;
  }
}

/* dames links/rechts naast het frame */

.sidepanel-ornament--lady-left,
.sidepanel-ornament--lady-right,
.sidepanel-ornament--right-bottom,
.sidepanel-ornament--left-top,
.sidepanel-ornament--left-cross {
  display:none;
}

@media (min-width: 800px) {
  .sidepanel-ornament--lady-left, .sidepanel-ornament--lady-right, .sidepanel-ornament--right-bottom,.sidepanel-ornament--left-top,
  .sidepanel-ornament--left-cross {
    display: flex;
  }

  .sidepanel-ornament--lady-left{
    bottom: min(-15rem, -16vh);
    right: clamp(24rem, 40vw, 32rem);
    width: clamp(12rem, 20vw, 17rem);
  }

  .sidepanel-ornament--lady-right{
    bottom: min(-14rem, -16vh);
    left: clamp(24rem, 44vw, 32rem);
    width: clamp(12rem, 20vw, 17rem);
  }

  /* grote swirl rechts onder */
  .sidepanel-ornament--right-bottom {
    bottom: 0;
    right: 0;
    width: min(230px, 23vw);
  }

  /* linksboven groot ornament */
  .sidepanel-ornament--left-top {
    top: 0;
    left: 0;
    width: min(270px, 25vw);
  }

  /* klein kruisje links */
  .sidepanel-ornament--left-cross {
    top: min(350px, 32vw);
    left: min(75px, 7vw);
    width: min(40px, 4vw);
  }
}

/* search-balk in het frame */

.sidepanel-search {
  width: 250px;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding-bottom: 0.6rem;
}

.sidepanel-search input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 1rem;
}

/* menu in het frame */

.sidepanel-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.sidepanel-nav a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 400;
}

.submenu {
  display: block;
}

.submenu-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
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
  transition: transform 0.3s ease;
}

.submenu-toggle[aria-expanded="true"] .submenu-caret {
  transform: rotate(180deg);
}

.submenu-menu {
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.submenu-menu[hidden] {
  display: none;
}

/* ---------- footer onderaan (links) ---------- */

.sidepanel-footer {
  width: 100%;
  margin-top: auto;
  margin-left: 6rem;
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  font-size: 0.85rem;
  opacity: 0.9;
  text-align: left;
}


</style>
