import { PUBLIC_APIURL, PUBLIC_API_KEY } from '$env/static/public';

// place files you want to import through the `$lib` alias in this folder.
export function arrayToObject(array) {
    const result = {};
    for (const entry of array) {
        result[entry.field] = entry.value;
    }
    return result;
}

const nRows = 25;

export const booksURL = `${PUBLIC_APIURL}/media?apiKey=${PUBLIC_API_KEY}&facetFields%5B%5D=search_s_auteur&facetFields%5B%5D=search_s_plaats_van_uitgave&facetFields%5B%5D=search_s_jaar&facetFields%5B%5D=search_s_digitized_publication&fq%5B%5D=search_s_digitized_publication:%22Ja%22&lang=nl&page=1&q=&rows=${nRows}&sort=random%7B1709035870679%7D+asc`;

// TODO: Add filters as arguments
export async function getBooks(pageNr, customFetch = null) {
    let query = booksURL + '&page=' + pageNr;

	const res = await (customFetch ?? fetch)(query);
    const data = await res.json();
    const books = data.media.map((book) =>{
        const meta = arrayToObject(book.metadata, 'value')
        return {
            title: book.title,
            author: meta.auteur,
            publicationYear: meta.jaar,
            bookImages: book.asset?.map(asset => asset.thumb) ?? []
        }
    });
    return {
        totalPages: Math.ceil(data.metadata.pagination.total / nRows),
        books
    }
}