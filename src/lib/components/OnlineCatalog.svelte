<section class="cat-container">
    <section class="online-catalog">
        <div class="cat-title">
            <h2>Onze Collectie</h2>
            <p>Een gedeelte van boeken uit onze collectie is al gedigitaliseerd. Met uw steun kunnen we de rest van onze collectie ook digitaliseren. Blader door objecten die het verhaal van onze geschiedenis vertellen. Elk object is voorzien van context, herkomst en datering.</p>
        </div>
        <a class="catalog-link" href="/">
            Catalogus Bekijken
            <span>
                <img src="images/arrow-exhibition.svg" height="15" width="15" alt="arrow" />
            </span>
        </a>
        <div class="card-container">
            <div class="cards-wrapper">
                <div class="card">
                    <img class="book-cover" src="images/book-templ.png" alt="book-name">
                    <p>Tiedemann, Dieterich</p>
                    <h3>Versuch einer Erklärung des Ursprunges der Sprache</h3>
                    <a href="#">
                        <span>
                            <img src="images/arrow-exhibition.svg" height="25" width="25" alt="arrow" />
                        </span>
                    </a>
                </div>
                <div class="card">
                    <img class="book-cover" src="images/book-templ.png" alt="book-name">
                    <p>Tiedemann, Dieterich</p>
                    <h3>Versuch einer Erklärung des Ursprunges der Sprache</h3>
                    <a href="#">
                        <span>
                            <img src="images/arrow-exhibition.svg" height="25" width="25" alt="arrow" />
                        </span>
                    </a>
                </div>                
                <div class="card">
                    <img class="book-cover" src="images/book-templ.png" alt="book-name">
                    <p>Tiedemann, Dieterich</p>
                    <h3>Versuch einer Erklärung des Ursprunges der Sprache</h3>
                    <a href="#">
                        <span>
                            <img src="images/arrow-exhibition.svg" height="25" width="25" alt="arrow" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </section>
</section>

<style> 
    .cat-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .online-catalog {
        padding: 2rem;
        background-color: #E6EDF2;;
        border-radius: 30px;
        width: 80vw;
        text-align: center;
        position: relative;
        top: 5rem;
        .catalog-link {
            text-decoration: none;
            color: #002646;
            background-color: white;
            border: 1px solid gray;
            border-radius: 30px;
            padding: 1rem;
            span {
                position: relative;
                background-color: #002646;
                padding: 5px;
                border-radius: 20px;
                img {
                    filter: brightness(0) invert(1);
                    position: relative;
                    top: 4px;
                }
            }
  
        }
    }
    
    .cards-container {
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

        .card {
            position: relative;
            display: flex;
            margin: 0;
            flex-direction: column;
            text-align: left;
            background-color: white;
            width: 72vw;
            min-width: 13rem;
            border-radius: 30px;
            padding: 1rem;
            p {
                color: gray;
                font-size: 18px;
            }
            h3 {
                color: black;
                font-size: 20px;
                margin-right: 4rem;
            }
            .book-cover {
                border-radius: 20px;
            }
            span {
                position: absolute;
                bottom: 1rem;
                right: 1.5rem;

            }
        }
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