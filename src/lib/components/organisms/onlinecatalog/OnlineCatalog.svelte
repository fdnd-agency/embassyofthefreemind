<script>
  let { books = [] } = $props();
</script>

<section class="cat-container">
    <section class="online-catalog">
        <div class="cat-title">
            <h2>Onze Collectie</h2>
            <p>Een gedeelte van boeken uit onze collectie is al gedigitaliseerd. Met uw steun kunnen we de rest van onze collectie ook digitaliseren. Blader door objecten die het verhaal van onze geschiedenis vertellen. Elk object is voorzien van context, herkomst en datering.</p>
        </div>
        
        <a class="btn btn--gradient btn--blue catalog-link" href="/">
            <span class="btn-label">Online Catalogus bekijken</span>
            <img src="images/arrow-exhibition.svg" height="15" width="15" alt="link-arrow" />
        </a>

        <div class="card-container">
            <div class="cards-wrapper">
                {#each books as book}
                    <div class="card">
                    <a href="/">
                        <img class="book-cover" src={`https://fdnd-agency.directus.app/assets/${book.image}`} 
                        alt="{book.title} cover image" 
                        loading="lazy" 
                        decoding="async"
                        >
                        <p>{book.author}</p>
                        <h3>{book.title}</h3>
                    </a>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</section>

<style> 
    .cat-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

    .online-catalog {
        padding: 2rem;
        border-radius: 30px;
        width: 80vw;
        text-align: right;

        container-type: inline-size;
        container-name: catalog;

        .catalog-link {
            transition: color 0.1s ease-in-out;
            &:hover {
                color: var(--blue-stop-03);
            }
        }
        @container catalog (min-width: 800px) {
            .cat-title{
                display: flex;
                h2 {
                    font-size: 3rem;
                    white-space: nowrap;
                }
                p {
                    font-size: 1.25rem;
                    line-height: 1.6;
                    width: 35%;
                    text-align: right;
                    margin-left: auto;
                }
            }
        }
    }
    
    .card-container {
        display: grid;
        grid-template-columns: var(--page-margin) [center-start] 1fr [center-end] var(--page-margin);
    }

    .cards-wrapper {
        grid-column: center-start / center-end;
        display: grid;
        grid-auto-flow: column;
        gap: 1rem;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 2rem;
        padding-inline: var(--page-margin);
        -webkit-overflow-scrolling: touch;
        scroll-behavior: auto;

        .card a{
            position: relative;
            display: flex;
            margin: 0;
            gap: 1rem;
            flex-direction: column;
            text-align: left;
            width: 72vw;
            min-width: 13rem;
            padding: 1rem;
            transition: transform 0.1s linear;
            p {
                color: gray;
                font-size: 18px;
            }
            h3 {
                color: black;
                font-size: 20px;
                margin-right: 4rem;
            }
            span {
                position: absolute;
                bottom: 1rem;
                right: 1.5rem;

            }
            &:hover {
                transform: scale(1.02);
            }            
        }
    }

    @container catalog (min-width: 600px) {
        .cards-wrapper .card a { width: 45vw; }
    }

    @container catalog (min-width: 900px) {
        .cards-wrapper .card a { width: 25vw; }
    }

    @supports (scroll-snap-type: x mandatory) {
        .cards-wrapper {
            scroll-snap-type: x mandatory;
            scroll-behavior: smooth;
        }

        .cards-wrapper .card {
            scroll-snap-align: start;
        }
    }

    
</style>