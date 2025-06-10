    <nav class="menu bg-base-100">
        <div class="hamburger-container">
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="btn hamburger-btn">
                <svg viewBox="0 0 8 6" fill="#000" width="32">
                    <path d="M 0.5 0 h 7 a 0.5 0.5 0 0 1 0 1 h -7 a 0.5 0.5 0 0 1 0 -1"/>
                    <path d="M 0.5 2.5 h 7 a 0.5 0.5 0 0 1 0 1 h -7 a 0.5 0.5 0 0 1 0 -1"/>
                    <path d="M 0.5 5 h 7 a 0.5 0.5 0 0 1 0 1 h -7 a 0.5 0.5 0 0 1 0 -1"/>
                </svg>
            </label>
        </div>
        <!-- This incorrectly gives a warning due to enhanced:img instead of img -->
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <div class="px-2 lg:flex-none">
            <a class="logo" href="/" aria-label="home"><enhanced:img class="logo-img" src="$lib/static/logo-efm.png" alt="logo"></a>
        </div>
        <div class="flex flex-1 justify-end px-2">
            <div class="navbar flex items-stretch">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Plan your visit</div>
                    <ul class="menu dropdown-content bg-base-100 z-[1] w-52 p-2 shadow">
                        <li><a href="/blog/about-museum">About the museum</a></li>
                        <li><a href="/blog/hours-tickets-and-admission">Hours, tickets & admission</a></li>
                        <li><a href="/blog/agenda">Agenda</a></li>
                        <li><a href="/blog/virtual-tour">Virtual tour</a></li>
                        <li><a href="/blog/kids">Kids</a></li>
                        <li><a href="/blog/house-rules">House rules</a></li>
                        <li><a href="/blog/route-and-accessibility">Route and accessibility</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">About us</div>
                    <ul class="menu dropdown-content bg-base-100 z-[1] w-52 p-2 shadow">
                        <li><a href="/blog/about-EFM">About EFM</a></li>
                        <li><a href="/blog/mission-and-vision">Mission and vision</a></li>
                        <li><a href="/blog/organisation">Organisation</a></li>
                        <li><a href="/blog/news">News</a></li>
                        <li><a href="/blog/partners">Partners</a></li>
                        <li><a href="/blog/activities-archive">Activities archive</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Library</div>
                    <ul class="menu dropdown-content bg-base-100 z-[1] w-52 p-2 shadow">
                        <li><a href="/digital-catalog">Digital catalog</a></li>
                        <li><a href="/blog/about-the-library">About the library</a></li>
                        <li><a href="/blog/contributions-to-digital-collection">Contributions to digital collection</a></li>
                        <li><a href="/blog/collecting-areas">Collecting areas</a></li>
                        <li><a href="/blog/glossary">Glossary</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Get involved</div>
                    <ul class="menu dropdown-content bg-base-100 z-[1] w-52 p-2 shadow">
                        <li><a href="/blog/support-us">Support us</a></li>
                        <li><a href="/blog/event-venue">Event venue</a></li>
                        <li><a href="/blog/vacancies">Vacancies</a></li>
                        <li><a href="/blog/activities-archive">Activities archive</a></li>
                        <li><a href="/blog/partners">Partners</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost btn-primary" href="/">Tickets</a>
                <a class="btn btn-ghost btn-primary" href="/">Webshop</a>

                <div class="flag-container">
                    <!-- svelte-ignore a11y_consider_explicit_label  -->
                    <button>EN</button>
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button>NL</button>
                </div>
            </div>
        </div>
    </nav>

<style>

    nav {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: start;
        color: var(--primaryColor);
        min-height: 4em;
        padding: 0 5vw;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        background-color: var(--backgroundColor);
        margin-bottom: 4rem;
    }

    .logo {
        background-color: var(--backgroundColor);
        height: 4em;
    }

    .logo-img {
        height: 4em;
        width: min-content;
        object-fit: contain;
    }

    .flag {
        width: 2em;
        height: 2em;
        opacity: 50%;
    }

    .language-btn {
        pointer-events: none;
    }

    .flag-container {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }

    .flag-container button {
        padding: 5px;
    }

    .hamburger-btn {
        box-shadow: none;
    }
    .hamburger-btn:hover {
        background-color: var(--backgroundColor);
    }

    .btn {
        border: unset;
    }

    .navbar {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: end;
        max-width: 80em;
        margin-left: auto;
        gap: 1em;
    }

    .navbar .btn-ghost:focus-visible {
        outline: var(--outline);
    }

    a.logo {
        display: block;
    }

    a.logo:focus-visible {
        outline: var(--outline);
    }

    .navbar ul a {
        width: 100%;
    }

    .hamburger-container {
        width: max-content;
        display: none;
    }

    #menu-toggle {
        width: 0;
        opacity: 0;
    }

    input:focus-visible + label {
        outline: var(--outline);
    }

    path {
        transition: transform 200ms, opacity 200ms; 
    }

    path:nth-child(1) {
        transform-origin: 0.5px 0.5px;
    }

    path:nth-child(3) {
        transform-origin: 0.5px 5.5px;
    }

    input:checked + label path:nth-child(1) {
        transform: translateX(1px) rotate(45deg);
    }

    input:checked + label path:nth-child(2) {
        opacity: 0;
    }

    input:checked + label path:nth-child(3) {
        transform: translateX(1px) rotate(-45deg);
    }

    @media only screen and (max-width: 932px) {
        .navbar {
            display: none;
            flex-direction: column;
            justify-content: start;
            background-color: var(--backgroundColor);
            position: fixed;
            left: 0;
            top: 4rem;
            width: 20em;
            height: calc(100vh - 4rem);
            z-index: 1;
        }

        .navbar .btn-ghost {
            width: 100%;
        }

        .navbar ul {
            bottom: auto;
            top: -50%;
            inset-inline-start: 100%;
        }

        .hamburger-container {
            display: block;
        }

        nav:has(#menu-toggle:checked) .navbar {
            display: flex;
        }

        .flag-container {
            justify-content: center;
        }
    }
</style>