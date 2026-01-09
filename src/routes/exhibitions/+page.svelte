<script>
    /** @type {import('./$types').PageProps} */
    let { data } = $props();
</script>

<section class="exhibitions-hero">
    <h1>Evenementen & <br>Tickets</h1>
    <img src="/images/hero-exh.png" alt="exhibition-image">
</section>

<section class="exhibitions-list">  
    <h2 class="exhibitions-title">Bekijk Evenementen</h2>
    <article>
        <span>1 augustus 2026</span>
        <h2>Exhibition Title</h2>
        <details>
            <summary>Lees meer</summary>
            <p>This is a brief description of the exhibition. It provides insights into what visitors can expect.</p>
        </details>
        <img src="https://placehold.co/100" alt="Exhibition Thumbnail">
        <a href="#">Tickets</a>
    </article>

    <article>
        <span>1 augustus 2026</span>
        <h2>Exhibition Title</h2>
        <details>
            <summary>Lees meer</summary>
            <p>This is a brief description of the exhibition. It provides insights into what visitors can expect.</p>
        </details>
        <img src="https://placehold.co/100" alt="Exhibition Thumbnail">
        <a href="#">Tickets</a>
    </article>

        <article>
        <span>1 augustus 2026</span>
        <h2>Exhibition Title</h2>
        <details>
            <summary>Lees meer</summary>
            <p>This is a brief description of the exhibition. It provides insights into what visitors can expect.</p>
        </details>
        <img src="https://placehold.co/100" alt="Exhibition Thumbnail">
        <a href="#">Tickets</a>
    </article>
</section>


<style>
    .exhibitions-hero { 
        background-color: #002646;
        height: 35vh;
        padding: 1rem;
        h1 {
            font-weight: bold;
            position: absolute;
            top: 10vh;
            color: white;
            font-size: 48px;
            z-index: 1;
        }
        img {
            display: block;
            margin: 0 auto;
            width: 90vw;
            position: relative;
            top: 70%;
        }
    }

    .exhibitions-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        padding: 2rem;
        .exhibitions-title {
            text-align: center;
            padding-top: 10rem;
            font-size: 32px;
        }
        article {
            border: 1px solid #ccc;
            padding: 1rem;
            border-radius: 8px;
            a {
                text-decoration: none;
                padding: 1rem;
                display: flex;
                justify-content: center;
            }
            h2 {
                font-size: 24px;
                margin-bottom: 0.5rem;
            }
            details {
                margin-bottom: 1rem;
                summary {
                    cursor: pointer;
                    font-weight: bold;
                }
                p {
                    margin-top: 0.5rem;
                }
            }
            img {
                width: 100%;
                height: auto;
                border-radius: 4px;
            }
        }
    }
</style>
