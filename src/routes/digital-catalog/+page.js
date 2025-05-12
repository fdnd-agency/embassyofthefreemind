/** @type {import('./$types').PageLoad} */
import { PUBLIC_APIURL, PUBLIC_API_KEY } from '$env/static/public';
import { getBooks, placesURL } from '$lib';

export async function load({ url, fetch }) {

	let resultsPage = parseInt(url.searchParams.get('results-page')) || 1;
	const resultsPageAction = url.searchParams.get('results-page-action');
	if (resultsPageAction === 'next') {
		resultsPage++;
	} else if (resultsPageAction === 'previous') {
		resultsPage--
	}




}