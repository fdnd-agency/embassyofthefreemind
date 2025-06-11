/** @type {import('./$types').PageLoad} */
import { getBooks } from '$lib';

export async function load({ url, fetch }) {

	let resultsPage = parseInt(url.searchParams.get('results-page')) || 1;
	const resultsPageAction = url.searchParams.get('results-page-action');
	if (resultsPageAction === 'next') {
		resultsPage++;
	} else if (resultsPageAction === 'previous') {
		resultsPage--
	}

	const searchTerm = url.searchParams.get('q');

	const { books, totalResults } = await getBooks(resultsPage, searchTerm, fetch);

	return {
		books,
		resultsPage,
		totalResults,
		searchTerm
	}
}