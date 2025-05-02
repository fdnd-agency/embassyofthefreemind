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

	const books = await getBooks(resultsPage, fetch);

	return {
		books,
		resultsPage
	}
}