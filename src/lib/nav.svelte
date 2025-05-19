<script>
    import logoSmall from '$lib/static/logo-small.png';
</script>

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
        <a class="logo" href="/"><img src={logoSmall} alt="logo"></a>
        <div class="menu">
            <a class="btn btn-ghost text-xl" href="/">Home</a>
            <a class="btn btn-ghost text-xl" href="/about-EFM">About EFM</a>
            <a class="btn btn-ghost text-xl" href="/plan-your-visit">Plan your visit</a>
            <a class="btn btn-ghost text-xl" href="/digital-catalog">Digital catalog</a>
            <a class="btn btn-ghost text-xl" href="/research-institute">Research institute</a>
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
        /* box-shadow: 0 8px 6px -6px var(--primaryColor); */
        width: 90%;
        margin: auto;
    }

    .logo {
        background-color: var(--backgroundColor);
    }

    img {
        min-width: 7em;
        object-fit: contain;
    }

    .menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 80em;
        margin-left: auto;
    }

    .menu a {
        padding: 0 0.5em;
        border-right: 2px solid var(--backgroundColor);
    }

    #menu-toggle {
        width: 0;
        opacity: 0;
    }

    label {
        display: none;
        z-index: 2;
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

    @media only screen and (max-width: 927px) {
        .menu {
            display: none;
        }

        label {
            display: flex;
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