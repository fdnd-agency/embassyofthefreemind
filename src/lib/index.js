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

export const booksURL = `${PUBLIC_APIURL}/media?apiKey=${PUBLIC_API_KEY}&facetFields%5B%5D=search_s_auteur&facetFields%5B%5D=search_s_plaats_van_uitgave&facetFields%5B%5D=search_s_jaar&facetFields%5B%5D=search_s_digitized_publication&lang=nl&page=1&q=&rows=${nRows}&sort=random%7B1709035870679%7D+asc`;

// Gets the books with a filter and page number. customFetch is used in +page.js
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

// Gets the possible options for a filter, with a sort, page number, and optional customFetch
export async function getFilterOptions(filterName, nRows, pageNr = 1, customFetch = null, sort = 'index') {
    let query = `${PUBLIC_APIURL}/filter/search_s_${filterName}?apiKey=${PUBLIC_API_KEY}&facetSort=${sort}&lang=nl&rows=${nRows}&page=${pageNr}`;
    const res = await (customFetch ?? fetch)(query);
    const data = await res.json();
    return {
        options: data.filter,
        total: data.metadata.pagination.total
    }
}

// Gets the first few options for each filter. CustomFetch required, since this is only used in +page.js
export async function getPreviewFilters(customFetch) {
    const result = await Promise.all([
        getFilterOptions('auteur', 6, 1, customFetch, 'count'),
        getFilterOptions('plaats_van_uitgave', 5, 1, customFetch=customFetch, 'count'),
        getFilterOptions('jaar', 2200, 1, customFetch=customFetch),
        getFilterOptions('digitized_publication', 2, 1, customFetch=customFetch)
    ]);

    result[0].options.shift() // remove anonymous

    return {
        authors: result[0].options,
        places: result[1].options,
        centuries: yearsToCenturies(result[2].options),
        digitalized: result[3].options
    }
}

// Generate a dictionary/map from centuries to books per century, initialized at 0 for each century.
const centuries = {};
for (let i = 15; i <= 21; i++) {
    centuries[i] = 0;
}

// Fill said dictionary. Takes a list of years and number of books released that year and converts it into a list of centuries and books released that century.
function yearsToCenturies(years) {
    const result = {...centuries}; // copy to prevent overwrite
    for (const {filter: year, count} of years) {
        const century = Math.floor(parseInt(year) / 100) + 1; // calculate the century that the year belongs to
        if (century >= 15 && century <= 21) {
            result[century] += count; // add the number of books for that year to the number of books for that century
        }
    }
    return Object.entries(result);
}