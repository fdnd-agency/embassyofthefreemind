/** @type {import('./$types').PageLoad} */
import { PUBLIC_APIURL, PUBLIC_API_KEY } from '$env/static/public';
import { arrayToObject, booksURL, authorsURL } from '$lib';

export async function load({ url }) {
    let query = booksURL;

    const author = url.searchParams.get('author');
    if (author) {
        query += `&fq[]=search_s_auteur:"${author}"`; //Add searchterm to url
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

	const resAuthors = await fetch(authorsURL);
	const dataAuthors = await resAuthors.json();
    const authors = dataAuthors.filter;

    return {
        books,
        authors
    }
}