<script>
    import Nav from './nav.svelte';
</script>

<header>
    <div class="header-image">
        <Nav/>
        <enhanced:img class="img-header-catalog" src="$lib/static/header-catalog.jpg" alt="klassiek geschrift logo catalogus">
    </div>
</header>

<style>
    .header-image {
        width: 100vw;
    }

    .img-header-catalog {
        width: 100vw;
        max-height: 15em;
        object-fit: cover;
        margin-top: 4rem; /* from fixed nav height */
    }
</style>