<script>
    import logoSmall from '$lib/static/logo-small.png';
</script>

<nav class="navbar bg-base-100">
    <a class="logo" href="/"><img src={logoSmall} alt="logo"></a>
    <div class="menu">
        <a class="btn btn-ghost text-xl" href="/">Home</a>
        <a class="btn btn-ghost text-xl" href="/about-EFM">About EFM</a>
        <a class="btn btn-ghost text-xl" href="/plan-your-visit">Plan your visit</a>
        <a class="btn btn-ghost text-xl" href="/digital-catalog">Digital catalog</a>
        <a class="btn btn-ghost text-xl" href="/research-institute">Research institute</a>
    </div>
</nav>

<style>
    nav {
        color: var(--primaryColor);
        max-height: 2em;
        box-shadow: 0 8px 6px -6px var(--primaryColor);
    }

    .logo {
        width: 7em;
        height: 7em;
        background-color: var(--backgroundColor);
        margin: 5em;
    }

    .menu {
        display: flex;
        flex-direction: row;
        justify-content: end;
        width: 80em;
    }

    a {
        border-right: 2px solid var(--backgroundColor);
    }
</style>