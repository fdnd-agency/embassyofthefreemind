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

	const searchTerm = url.searchParams.get('q');

	const author = url.searchParams.get('author');

	const { books, totalResults } = await getBooks(resultsPage, searchTerm, author, fetch);

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
    const totalAuthors = dataAuthors.metadata.pagination.total;

	return {
		books,
		resultsPage,
		totalResults,
		searchTerm,
		author,
        authors,
        totalAuthors,
		authorsPage,
	}
}