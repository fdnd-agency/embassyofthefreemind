<script>
    let { data } = $props();
	const books = data.books ?? []; 

	import { SectionWithLinks, Exhibitions, Hero, OnlineCatalog, Sponsors } from '$lib';
	const myImageUrl = '/images/image61.jpg';
</script>

<Hero />

<SectionWithLinks />

<Exhibitions
	imageUrl={myImageUrl}
	title="Off planets perspective"
	subtitle="Drawings by Joost Effers"
	dates="30 october t/m 28 december, 2025"
	linkUrl="nog niets"
/>

<OnlineCatalog books={books} />

<Sponsors />
