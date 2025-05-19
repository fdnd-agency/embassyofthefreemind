<script>

    import HeaderImage from '$lib/static/header-catalog.jpg';
    import Nav from './nav.svelte';

</script>

<header>
    <div class="header-image">
        <Nav/>
        <img src={HeaderImage} alt="klassiek geschrift logo catalogus">
    </div>
</header>

<style>
    .header-image {
        width: 100vw;
    }

    img {
        width: 100vw;
        max-height: 15em;
        object-fit: cover;
    }
</style>