/** @type {import('./$types').PageLoad} */
import { PUBLIC_APIURL, PUBLIC_API_KEY } from '$env/static/public';
import { arrayToObject, booksURL, placesURL } from '$lib';

export async function load({ fetch, url }) {
	let query = booksURL;

	const filterPlace = url.searchParams.get('publicationPlace');
	if (filterPlace) {
		query += `&fq[]=search_s_plaats_van_uitgave:"${filterPlace}"`; //Add searchterm to url
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
