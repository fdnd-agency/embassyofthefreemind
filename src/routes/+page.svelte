<script>
	import { Footer } from '$lib';
	import SectionWithLinks from '../lib/components/organisms/sectionwithlinks/SectionWithLinks.svelte';
	import Exhibitions from '$lib/components/organisms/exhibtions/Exhibitions.svelte';
	import Hero from '$lib/components/organisms/hero/Hero.svelte';
	const myImageUrl = '/images/image37.jpg';
</script>

<Hero />

<Exhibitions
	imageUrl={myImageUrl}
	title="Gewetensvrijheid!"
	subtitle="Denken, geloven en onderzoeken in Europa, 1500-1800"
	dates="28 april t/m 7 september 2025"
	linkUrl="nog niets"
/>

<SectionWithLinks />

<Footer />
