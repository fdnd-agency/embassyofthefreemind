import { PUBLIC_APIURL, PUBLIC_API_KEY } from '$env/static/public';

// Converts the data to a more usable format
export function arrayToObject(array, keyField, valueField) {
    const result = {};
    for (const entry of array) {
        result[entry[keyField]] = entry[valueField];
    }
    return result;
}

export const nRows = 25;

// The urls now show all the data, not filtered on ditialized books anymore
export const booksURL = `${PUBLIC_APIURL}/media?apiKey=${PUBLIC_API_KEY}&facetFields%5B%5D=search_s_auteur&facetFields%5B%5D=search_s_plaats_van_uitgave&facetFields%5B%5D=search_s_jaar&facetFields%5B%5D=search_s_digitized_publication&lang=nl&page=1&q=&rows=${nRows}&sort=random%7B1709035870679%7D+asc`;
export const placesURL = `${PUBLIC_APIURL}/filter/search_s_plaats_van_uitgave?ac=&apiKey=${PUBLIC_API_KEY}&facetFields%5B%5D=search_s_auteur&facetFields%5B%5D=search_s_plaats_van_uitgave&facetFields%5B%5D=search_s_jaar&facetFields%5B%5D=search_s_digitized_publication&facetSort=count&lang=nl&page=1&rows=45`;
export const authorsURL = `${PUBLIC_APIURL}/filter/search_s_auteur?ac=&apiKey=${PUBLIC_API_KEY}&facetFields[]=search_s_auteur&facetFields[]=search_s_plaats_van_uitgave&facetFields[]=search_s_jaar&facetFields[]=search_s_digitized_publication&facetSort=index&lang=nl&page=1&q=&rows=66`;

export async function getBooks(pageNr, {searchTerm, author, place, digitalized, startYear, endYear}, customFetch = null) {
    let query = booksURL + '&page=' + pageNr;

    if (searchTerm) query += "&q=" + searchTerm;
    if (author) query += '&fq[]=search_s_auteur:"' + author + '"';
    if (place) query += '&fq[]=search_s_plaats_van_uitgave:"' + place + '"';
    if (digitalized) query += '&fq[]=search_s_digitized_publication:"Ja"';
    if (startYear && endYear) query += '&fq[]=search_s_jaar:[' + startYear * 10000 + ' TO ' + endYear * 10000 + ']';

	const res = await (customFetch ?? fetch)(query);
    const data = await res.json();
    const books = data.media.map((book) => {
        const meta = arrayToObject(book.metadata, 'field', 'value')
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

export async function getPreviewFilters(customFetch) {
    const result = await Promise.all([
        customFetch(`${PUBLIC_APIURL}/filter/search_s_auteur?apiKey=${PUBLIC_API_KEY}&facetSort=count&lang=nl&rows=6`).then(res => res.json()),
        customFetch(`${PUBLIC_APIURL}/filter/search_s_plaats_van_uitgave?apiKey=${PUBLIC_API_KEY}&facetSort=count&lang=nl&rows=5`).then(res => res.json()),
        customFetch(`${PUBLIC_APIURL}/filter/search_s_jaar?apiKey=${PUBLIC_API_KEY}&lang=nl&rows=2200`).then(res => res.json()),
        customFetch(`${PUBLIC_APIURL}/filter/search_s_digitized_publication?apiKey=${PUBLIC_API_KEY}&lang=nl&rows=2`).then(res => res.json()),
    ]);

    result[0].filter.shift() // remove anonymous

    return {
        authors: result[0].filter,
        places: result[1].filter,
        centuries: yearsToCenturies(result[2].filter),
        digitalized: result[3].filter
    }
}

const centuries = {};
for (let i = 15; i <= 21; i++) {
    centuries[i] = 0;
}

function yearsToCenturies(years) {
    const result = {...centuries}; // copy to prevent overwrite
    for (const {filter: year, count} of years) {
        const century = Math.floor(parseInt(year) / 100) + 1;
        if (century >= 15 && century <= 21) {
            result[century] += count;
        }
    }
    return Object.entries(result);
}