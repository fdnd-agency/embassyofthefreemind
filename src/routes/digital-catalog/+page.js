/** @type {import('./$types').PageLoad} */
import { PUBLIC_APIURL, PUBLIC_API_KEY } from '$env/static/public';
import { arrayToObject, booksURL, authorsURL } from '$lib';

export async function load({ url, fetch }) {
    let query = booksURL;

    const filterAuthor = url.searchParams.get('author');
    if (filterAuthor) {
        query += `&fq[]=search_s_auteur:"${filterAuthor}"`; //Add searchterm to url
    }

	const res = await fetch(query);
    const data = await res.json();
    const books = data.media.map((book) =>{
        const meta = arrayToObject(book.metadata, 'value')
        return {
            title: book.title,
            author: meta.auteur,
            publicationYear: meta.jaar
        }
    });

	// If the 'next' button was clicked, increment(++) authorsPage. If 'previous' was clicked, decrement(--) instead.
	let authorsPage = parseInt(url.searchParams.get('authors_page')) || 1;
	const authorsPageAction = url.searchParams.get('authors_page_action');
	if (authorsPageAction === 'next') {
		authorsPage++;
	} else if (authorsPageAction === 'previous') {
		authorsPage--;
	}

	const resAuthors = await fetch(authorsURL + '&page=' + authorsPage);
	const dataAuthors = await resAuthors.json();
    const authors = dataAuthors.filter;

    return {
        books,
        authors,
		authorsPage,
		filterAuthor
    }
}