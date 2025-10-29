<script>
	import SectionWithLinks from '../lib/components/SectionWithLinks.svelte';
	import Exhibitions from '$lib/components/Exhibitions.svelte';
	import Hero from '$lib/components/Hero.svelte'
	const myImageUrl = '/images/image37.png';
</script>

<Hero/>

<Exhibitions
	imageUrl={myImageUrl}
	title="Gewetensvrijheid!"
	subtitle="Denken, geloven en onderzoeken in Europa, 1500-1800"
	dates="28 april t/m 7 september 2025"
	linkUrl="nog niets"
/>

<SectionWithLinks />
