<script>
    // Props for component reusability
    // These define the customizable data for the component
    export let imageUrl = "./assets/image37.png"; // <-- This is the default value
    export let title = "Gewetensvrijheid!";
    export let subtitle = "Denken, geloven en onderzoeken in Europa, 1500-1800";
    export let dates = "28 april t/m 7 september 2025";
    export let linkUrl = "#";
</script>

<div class="nutezien-card">
    <h3>NU TE ZIEN</h3>

    <section class="image-section">
        <img
            src={imageUrl}
            alt="Alchemistische afbeelding met tekst"
            class="main-image"
        />

        <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="overlay-container"
        >
            <div class="date-arrow-row">
                <span class="dates">{dates}</span>
                <div class="arrow-circle">&nearr;</div>
            </div>
            <div class="text-content">
                <p class="title"><strong>{title}</strong></p>
                <p class="subtitle">{subtitle}</p>
            </div>
        </a>
    </section>
</div>

<style>
    .nutezien-card {
        /* Basic container styling */
        width: 100%;
        max-width: 95%; /* Example max-width, adjust as needed */
        font-family: sans-serif; /* Example font */
        margin: 20px;
        border: 1px solid #eee; /* Light border for definition */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background: white;
    }

    h3 {
        font-size: 1.5em;
        font-weight: bold;
        color: #333;
        padding: 10px 15px 0;
        margin-top: 0;
        margin-bottom: 5px;
    }

    .image-section {
        position: relative;
    }

    .main-image {
        width: 100%;
        height: auto;
        display: block;
    }

    .overlay-container {
        /* Position the overlay over the bottom of the image */
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;

        /* Styling for the semi-transparent background, similar to the image */
        background: rgba(
            255,
            255,
            255,
            0.95
        ); /* Nearly opaque white background */
        padding: 10px 15px;

        /* Make it a link that's visually distinct but acts as the button/info box */
        text-decoration: none;
        color: inherit; /* Inherit color so text isn't blue by default */
        cursor: pointer;
        display: block; /* Ensures the whole area is clickable */
        transition: background-color 0.2s;

        @media (width > 600px) {
            width: 400px;
        }
    }

    .overlay-container:hover {
        background: rgba(255, 255, 255, 1); /* Slight change on hover */
    }

    .date-arrow-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 5px;
    }

    .dates {
        font-size: 0.9em;
        color: #555;
    }

    .arrow-circle {
        /* Styling the circle/box for the arrow */
        background-color: #007bff; /* Example blue color, adjust to match original image */
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
        font-weight: bold;
        transform: rotate(
            45deg
        ); /* Rotate the arrow to match the image's diagonal direction */
    }

    .text-content .title {
        font-size: 1.2em;
        margin: 0;
        color: #000;
    }

    .text-content .subtitle {
        font-size: 0.9em;
        margin: 5px 0 0;
        color: #444;
    }
</style>
