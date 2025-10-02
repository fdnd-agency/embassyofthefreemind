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
                <div class="arrow-circle"><span>&nearr;</span></div>
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
        width: 100%;
        font-family: sans-serif;
        margin: 20px;
        border: 1px solid #eee;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        background: white;
        @media (min-width: 500px) {
            max-width: 95%;
        }
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
        min-height: 400px;
        object-fit: cover;
    }

    .overlay-container {
        width: 92%;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(255, 255, 255, 0.87);
        padding: 20px 25px;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        display: block;
        transition: background-color 0.2s;

        @media (width > 600px) {
            width: 400px;
            left: 5em;
            border-radius: 5em;
            bottom: 5em;
        }
    }

    .overlay-container:hover {
        background: rgba(255, 255, 255, 1);
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
        background-color: #002646;
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
        font-weight: bold;
        transition:
            background-color 0.4s ease,
            background 0.4s ease;
    }

    .overlay-container:hover .arrow-circle {
        background: linear-gradient(to right, #d8b66a, #7f6733);
    }

    .arrow-circle span {
        transform: translateY(-2.5px);
        display: block;
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
