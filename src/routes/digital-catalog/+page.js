/** @type {import('./$types').PageLoad} */
import { PUBLIC_APIURL } from '$env/static/public';
import { arrayToObject } from '$lib';

export async function load({ fetch }) {
	console.log(PUBLIC_APIURL)
	const res = await fetch(PUBLIC_APIURL)
	const data = await res.json()
	return {
		books: data.media.map((book) =>{
			const meta = arrayToObject(book.metadata)
			return {
				title: book.title,
				author: meta.auteur,
				publicationYear: meta.jaar
			}
		})
	};
}