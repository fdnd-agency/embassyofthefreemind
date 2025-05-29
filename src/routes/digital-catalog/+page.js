/** @type {import('./$types').PageLoad} */
import { getBooks, getPreviewFilters } from '$lib';

export async function load({ url, fetch }) {

	let resultsPage = parseInt(url.searchParams.get('results-page')) || 1;
	const resultsPageAction = url.searchParams.get('results-page-action');
	if (resultsPageAction === 'next') {
		resultsPage++;
	} else if (resultsPageAction === 'previous') {
		resultsPage--
	}

	const filter = {
		searchTerm: url.searchParams.get('q'),
		author: url.searchParams.get('author'),
		place: null,
		digitalized: false,
		startYear: null,
		endYear: null
	}

	const { books, totalResults } = await getBooks(resultsPage, filter, fetch);

	let authorsPage = parseInt(url.searchParams.get('authors-page')) || 1;
	const authorsPageAction = url.searchParams.get('authors-page-action');
	if (authorsPageAction === 'next') {
		authorsPage++;
	} else if (authorsPageAction === 'previous') {
		authorsPage--;
	}

	const previewFilters = await getPreviewFilters(fetch);

	return {
		books,
		resultsPage,
		totalResults,
        authors: null,
        totalAuthors: null,
		authorsPage,
		filter,
		previewFilters
	}
}