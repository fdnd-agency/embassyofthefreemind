<div class="nav-container">
    <nav class="navbar bg-base-100">
        <div class="hamburger-container">
            <input type="checkbox" id="menu-toggle">
            <label for="menu-toggle" class="btn">
                <svg viewBox="0 0 8 6" fill="#000" width="32">
                    <path d="M 0.5 0 h 7 a 0.5 0.5 0 0 1 0 1 h -7 a 0.5 0.5 0 0 1 0 -1"/>
                    <path d="M 0.5 2.5 h 7 a 0.5 0.5 0 0 1 0 1 h -7 a 0.5 0.5 0 0 1 0 -1"/>
                    <path d="M 0.5 5 h 7 a 0.5 0.5 0 0 1 0 1 h -7 a 0.5 0.5 0 0 1 0 -1"/>
                </svg>
            </label>
        </div>
        <!-- This incorrectly gives a warning due to enhanced:img instead of img -->
        <!-- svelte-ignore a11y_consider_explicit_label -->
        <a class="logo" href="/" aria-label="home"><enhanced:img class="logo-img" src="$lib/static/logo-efm.png" alt="logo"></a>
        <div class="menu">
            <a class="btn btn-ghost text-xl" href="/about-EFM">About EFM</a>
            <a class="btn btn-ghost text-xl" href="/plan-your-visit">Plan your visit</a>
            <a class="btn btn-ghost text-xl" href="/digital-catalog">Digital catalog</a>
            <a class="btn btn-ghost text-xl" href="/research-institute">Research institute</a>
            <div class="flag-container">
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button aria-label="english"><enhanced:img class="flag" src="$lib/static/united-kingdom.png" alt="English-version"></button>
                <!-- svelte-ignore a11y_consider_explicit_label -->
                <button aria-label="nederlands"><enhanced:img class="flag" src="$lib/static/netherlands.png" alt="Dutch-version"></button>
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
        max-height: 2em;
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

    .menu {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
        max-width: 80em;
        margin-left: auto;
    }

    .menu a {
        padding: 0 0.5em;
        border-right: 2px solid var(--backgroundColor);
    }

    .hamburger-container {
        display: none;
    }

    #menu-toggle {
        width: 0;
        opacity: 0;
    }

    label {
        z-index: 2;
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
        .menu {
            display: none;
        }

        .hamburger-container {
            display: block;
        }

        .hamburger-container:has(#menu-toggle:checked) ~ .menu {
            display: flex;
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
    }
</style>