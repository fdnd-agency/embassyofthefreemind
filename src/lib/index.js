import { PUBLIC_APIURL, PUBLIC_API_KEY } from '$env/static/public';
// place files you want to import through the `$lib` alias in this folder.
export function arrayToObject(array, valueField) {
    const result = {};
    for (const entry of array) {
        result[entry.field] = entry[valueField];
    }
    return result;
}

export const booksURL = `${PUBLIC_APIURL}/media?apiKey=${PUBLIC_API_KEY}&facetFields%5B%5D=search_s_auteur&facetFields%5B%5D=search_s_plaats_van_uitgave&facetFields%5B%5D=search_s_jaar&facetFields%5B%5D=search_s_digitized_publication&fq%5B%5D=search_s_digitized_publication:%22Ja%22&lang=nl&page=1&q=&rows=25&sort=random%7B1709035870679%7D+asc`;
export const placesURL = `${PUBLIC_APIURL}/filter/search_s_plaats_van_uitgave?ac=&apiKey=${PUBLIC_API_KEY}&facetFields%5B%5D=search_s_auteur&facetFields%5B%5D=search_s_plaats_van_uitgave&facetFields%5B%5D=search_s_jaar&facetFields%5B%5D=search_s_digitized_publication&facetSort=index&lang=nl&page=1&q=&rows=45`;