<script>
    
    let { data } = $props();
    const exhibitions = data.exhibitions;

    const formatDate = v => new Date(v).toLocaleDateString('nl-NL', { day:'numeric', month:'long', year:'numeric' });

</script>

<section class="exhibitions-hero">
    <h1>Evenementen & <br>Tickets</h1>
    <img src="/images/hero-exh.png" alt="Evenementen & Tickets">
</section>

<section class="exhibitions-list">  

    <h2 class="exhibitions-title">Bekijk Evenementen</h2>

    <div class="exhibitions-grid">
        {#each exhibitions as exhibition}
            <article>
                {#if exhibition.date_start}
                    <span>{formatDate(exhibition.date_start)}</span>
                {:else}
                    <span>Datum nog niet bekend</span>
                {/if}
                <h2>{exhibition.name}</h2>
                <details>
                    <summary>Lees meer</summary>
                    <p>{exhibition.description}</p>
                </details>
                <img src={`https://fdnd-agency.directus.app/assets/${exhibition.cover}`} alt="{exhibition.name} cover image">
                <a href="/">Tickets</a>
            </article>
        {/each}
    </div>

</section>


<style>
    .exhibitions-hero { 
        background-color: #002646;
        height: 35vh;
        padding: 1rem;
        @media (min-width: 1024px) {
            height: 50vh;
        }
        h1 {
            font-weight: bold;
            position: absolute;
            top: 10vh;
            color: white;
            font-size: 48px;
            z-index: 1;
            @media (min-width: 1024px) {
                font-size: 144px;
            }
        }
        img {
            display: block;
            margin: 0 auto;
            width: 90vw;
            position: relative;
            top: 70%;
            @media (min-width: 768px) {
                width: 60vw;
            }
            @media (min-width: 1024px) {
                width: 50vw;
            }
        }
    }

    .exhibitions-list {
        padding: 1rem;
        @media (min-width: 1024px) {
            padding: 25rem;
        }
        .exhibitions-title {
            text-align: center;
            padding-top: 10rem;
            font-size: 32px;
        }
        .exhibitions-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        article {
            display: flex;
            flex-direction: column;
            background-color: #002646;
            color: white;
            border: 1px solid #ccc;
            padding: 2.25rem;
            border-radius: 30px;
            gap: 1rem;
            span {
                padding: 0.25rem;
                text-align: right;
                text-transform: uppercase;
            }
            a {
                width: 164px;
                display: block;   
                margin: 0 auto;     
                text-decoration: none;
                padding: 0.5rem;
                border-radius: 30px;
                color: #000;
                background-color: #fff;
                text-align: center;
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
