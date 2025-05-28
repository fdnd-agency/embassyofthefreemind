import { PUBLIC_APIURL, PUBLIC_API_KEY } from '$env/static/public';

// place files you want to import through the `$lib` alias in this folder.
export function arrayToObject(array, valueField) {
    const result = {};
    for (const entry of array) {
        result[entry.field] = entry[valueField];
    }
    return result;
}

export const nRows = 25;

export const booksURL = `${PUBLIC_APIURL}/media?apiKey=${PUBLIC_API_KEY}&facetFields%5B%5D=search_s_auteur&facetFields%5B%5D=search_s_plaats_van_uitgave&facetFields%5B%5D=search_s_jaar&facetFields%5B%5D=search_s_digitized_publication&lang=nl&page=1&q=&rows=${nRows}&sort=random%7B1709035870679%7D+asc`;

export const authorsURL = `${PUBLIC_APIURL}/filter/search_s_auteur?ac=&apiKey=${PUBLIC_API_KEY}&facetFields[]=search_s_auteur&facetFields[]=search_s_plaats_van_uitgave&facetFields[]=search_s_jaar&facetFields[]=search_s_digitized_publication&facetSort=index&lang=nl&page=1&q=&rows=66`;

// TODO: Add filters as arguments
export async function getBooks(pageNr, searchTerm, author, customFetch = null) {
    let query = booksURL + '&page=' + pageNr;

    if (searchTerm) {
        query += "&q=" + searchTerm;
    }

    if (author) {
        query += '&fq[]=search_s_auteur:"' + author + '"';
    }

	const res = await (customFetch ?? fetch)(query);
    const data = await res.json();
    const books = data.media.map((book) => {
        const meta = arrayToObject(book.metadata, 'value')
        return {
            title: book.title,
            author: meta.auteur,
            publicationYear: meta.jaar,
            publicationPlace: meta.plaats_van_uitgave,
            bookImages: book.asset?.map(asset => asset.thumb) ?? []
        }
    });
    return {
        totalResults: data.metadata.pagination.total,
        books
    }
}