export async function load({ url }) {
    const books = await fetch("https://fdnd-agency.directus.app/items/efm_books");
    const booksData = await books.json();

    return { books: booksData.data };
}
