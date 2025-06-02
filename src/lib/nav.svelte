<div class="nav-container">
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
        <div class="flex-1 px-2 lg:flex-none">
            <a class="logo" href="/" aria-label="home"><enhanced:img class="logo-img" src="$lib/static/logo-efm.png" alt="logo"></a>
        </div>
        <div class="flex flex-1 justify-end px-2">
            <div class="navbar flex items-stretch">
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Plan your visit</div>
                    <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="/digital-catalog">Digital catalog</a></li>
                        <li><a href="https://embassyofthefreemind.com/nl/collectie/over-de-bibliotheek-2">About the library</a></li>
                        <li><a href="https://embassyofthefreemind.com/nl/collectie/digitale-collectie1">Contributions to digital collection</a></li>
                        <li><a href="https://embassyofthefreemind.com/en/library/collecting-areas">Collecting areas</a></li>
                        <li><a href="a">Glossary</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">About us</div>
                    <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="/digital-catalog">Digital catalog</a></li>
                        <li><a href="https://embassyofthefreemind.com/nl/collectie/over-de-bibliotheek-2">About the library</a></li>
                        <li><a href="https://embassyofthefreemind.com/nl/collectie/digitale-collectie1">Contributions to digital collection</a></li>
                        <li><a href="https://embassyofthefreemind.com/en/library/collecting-areas">Collecting areas</a></li>
                        <li><a href="a">Glossary</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Library</div>
                    <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="/digital-catalog">Digital catalog</a></li>
                        <li><a href="https://embassyofthefreemind.com/nl/collectie/over-de-bibliotheek-2">About the library</a></li>
                        <li><a href="https://embassyofthefreemind.com/nl/collectie/digitale-collectie1">Contributions to digital collection</a></li>
                        <li><a href="https://embassyofthefreemind.com/en/library/collecting-areas">Collecting areas</a></li>
                        <li><a href="a">Glossary</a></li>
                    </ul>
                </div>
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost rounded-btn">Support us</div>
                    <ul class="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a href="/digital-catalog">Event venue</a></li>
                        <li><a href="https://embassyofthefreemind.com/nl/collectie/over-de-bibliotheek-2">About the library</a></li>
                        <li><a href="https://embassyofthefreemind.com/nl/collectie/digitale-collectie1">Contributions to digital collection</a></li>
                        <li><a href="https://embassyofthefreemind.com/en/library/collecting-areas">Collecting areas</a></li>
                        <li><a href="a">Glossary</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost btn-primary" href="/research-institute">Tickets</a>
                <a class="btn btn-ghost btn-primary" href="/research-institute">Webshop</a>

                <div class="flag-container">
                    <!-- svelte-ignore a11y_consider_explicit_label  -->
                    <button aria-label="english"><enhanced:img class="flag" src="$lib/static/united-kingdom.png" alt="English-version"></button>
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <button aria-label="nederlands"><enhanced:img class="flag" src="$lib/static/netherlands.png" alt="Dutch-version"></button>
                </div>
            </div>
        </div>
    </nav>
</div>

<style>
    .nav-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        background-color: var(--backgroundColor);
        margin-bottom: 4rem;
    }

    nav {
        color: var(--primaryColor);
        max-height: 5em;
        width: 90%;
        margin: auto;
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
        max-width: 80em;
        margin-left: auto;
        gap: 1em;
    }

    .navbar ul {
        inset-inline-start: calc(50% - 6.5rem);
    }

    .navbar ul a {
        display: inline;
        width: 100%;
        text-align: center;
    }

    .hamburger-container {
        display: none;
    }

    #menu-toggle {
        width: 0;
        opacity: 0;
    }

    input:focus + label {
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