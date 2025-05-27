<script>
    import { getBooks } from "$lib";
    import BookViewer from "$lib/book-viewer.svelte";
    /** @type {import('./$types').PageData} */
    let { booksData } = $props();

    let books = $state(booksData);

    // $effect means this anonymous function will be called every time resultsPage or searchTerm is updated
    $effect(async () => {
        // https://svelte.dev/docs/svelte/$effect
        const res = await getBooks(resultsPage, searchTerm);
        books = res.books;
        totalResults = res.totalResults;
    });
</script>

<ul class="book-list">
    {#each books as book, i}
        <li class="book-card">
            <div class="book-image skeleton">
                {#if book.bookImages}
                    <BookViewer
                        images={book.bookImages}
                        queryKey={"boek" + i}
                        title={book.title}
                    />
                {/if}
            </div>
            <div class="book-info">
                <h2 class="book-title">
                    {book.title || "Niet beschikbaar"}
                </h2>
                <p>
                    <span class="label">Author</span><span class="value"
                        >{book.author || "-"}</span
                    >
                </p>
                <p>
                    <span class="label">Year</span><span class="value"
                        >{book.publicationYear || "-"}</span
                    >
                </p>
                <p>
                    <span class="label">Place of publication</span><span
                        class="value">{book.publicationPlace || "-"}</span
                    >
                </p>
                <a href="#">More details</a>
            </div>
        </li>
    {/each}
</ul>

<style>
    .book-list {
        list-style: none;
        padding: 0;
        margin: 1rem 0;
    }

    .book-card {
        display: flex;
        gap: 1.5rem;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        padding: 1.5rem 0;
    }

    .book-image {
        width: 150px;
        height: auto;
        flex-shrink: 0;
    }

    .book-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .book-title {
        color: var(--primaryColor);
        font-weight: bold;
        margin: 0 0 0.5rem 0;
    }

    .book-info p {
        margin: 0.3rem 0;
        color: var(--textColor);
        display: flex;
        margin: 0.3rem 0;
    }

    .label {
        width: 14rem;
        font-weight: bold;
        color: var(--textColor);
    }

    .book-info a {
        width: 6rem;
        margin-top: 2rem;
        margin-left: 0.25rem;
        color: var(--textColor);
        font-weight: 500;
    }

    .book-info a:hover {
        text-decoration: underline;
    }

    .skeleton {
        border-radius: 0rem;
        width: 20vw;
        height: 20vw;
        animation: skeleton none;
    }

    @media only screen and (max-width: 600px) {
        .book-card {
            flex-wrap: wrap;
        }

        .label {
            width: 9rem;
        }

        span {
            padding-top: 0.5rem;
        }

        .book-info a {
            align-self: anchor-center;
        }
    }
</style>
