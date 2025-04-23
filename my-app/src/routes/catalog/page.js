/** @type {import('./$types').PageLoad} */
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch }) {
	const directus = getDirectusInstance(fetch);
	return {
		posts: await directus.request(readItems('posts', {
			fields: ['slug', 'title', 'publish_date', { author: ['name'] }],
			sort: ['-publish_date'],
		})),
	};
}