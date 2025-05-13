/** @type {import('./$types').PageLoad} */
import { PUBLIC_APIURL, PUBLIC_API_KEY } from '$env/static/public';
import { getBooks, placesURL } from '$lib';

export async function load({ url, fetch }) {
	// Pagination for results
	let resultsPage = parseInt(url.searchParams.get('results-page')) || 1;
	const resultsPageAction = url.searchParams.get('results-page-action');
	if (resultsPageAction === 'next') {
		resultsPage++;
	} else if (resultsPageAction === 'previous') {
		resultsPage--;
	}

	// Filtering
	const publicationPlace = url.searchParams.get('place');

	const { books, totalPages } = await getBooks(resultsPage, publicationPlace, fetch);

	// Pagination for places
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