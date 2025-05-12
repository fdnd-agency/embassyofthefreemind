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

	const publicationPlace = url.searchParams.get('publicationPlace');

	const { books, totalPages } = await getBooks(resultsPage, publicationPlace, fetch);

	 let placesPage = parseInt(url.searchParams.get('places-page')) || 1;
    const placesPageAction = url.searchParams.get('places-page-action');
    if (placesPageAction === 'next') {
        placesPage++;
    } else if (placesPageAction === 'previous') {
        placesPage--;
    }

	const resPlaces = await fetch(placesURL + '&page=' + placesPage);
    const dataPlaces = await resPlaces.json();
    const places = dataPlaces.filter;
    return {
        books,
        resultsPage,
        totalPages,
        publicationPlace,
        places,
        placesPage,
    }
}