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

	const res = await fetch(query);
	const data = await res.json();
	const books = data.media.map((book) =>{
		const meta = arrayToObject(book.metadata, 'value')
		return {
			title: book.title,
			author: meta.auteur,
			publicationYear: meta.jaar,
			publicationPlace: meta.plaats_van_uitgave
		}
	});

	const resPlace = await fetch(placesURL);
	const dataPublicationPlace = await resPlace.json();
	const publicationPlaces = dataPublicationPlace.filter;

	// Extract publicationPlaces filter data from dataPublicationPlace.filter safely
	// const publicationPlaces = (dataPublicationPlace.filter ? dataPublicationPlace.filter.find(f => f.field === 'search_s_plaats_van_uitgave')?.filter : []) || [];

	return {
		books,
		publicationPlaces,
		rawData: data.publicationPlace
	}
}