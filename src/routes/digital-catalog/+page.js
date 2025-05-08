/** @type {import('./$types').PageLoad} */
import { getBooks, authorsURL } from '$lib';

export async function load({ url, fetch }) {

	let resultsPage = parseInt(url.searchParams.get('results-page')) || 1;
	const resultsPageAction = url.searchParams.get('results-page-action');
	if (resultsPageAction === 'next') {
		resultsPage++;
	} else if (resultsPageAction === 'previous') {
		resultsPage--
	}

	const author = url.searchParams.get('author');

	const { books, totalPages } = await getBooks(resultsPage, author, fetch);

	let authorsPage = parseInt(url.searchParams.get('authors-page')) || 1;
	const authorsPageAction = url.searchParams.get('authors-page-action');
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
		resultsPage,
		totalPages,
		author,
        authors,
		authorsPage,
	}
}