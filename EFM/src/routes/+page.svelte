<script>
    import Nutezien from "../lib/components/Nutezien.svelte"; // Adjust this path as needed

    // Define the variable that holds the specific image path for THIS instance
    // Make sure the path "EFM/src/lib/assets/image37.png" is correct for your project structure
    const myImageUrl = "/image37.png";
</script>

<main>
    <Nutezien
        imageUrl={myImageUrl}
        title="Gewetensvrijheid!"
        subtitle="Denken, geloven en onderzoeken in Europa, 1500-1800"
        dates="28 april t/m 7 september 2025"
        linkUrl="https://www.example.com/exhibition-details"
    />
</main>
