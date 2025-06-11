// +page.js
/** @type {import('./$types').PageLoad} */

function mapMetadata(metadataArray) {
	const result = {};
	for (const item of metadataArray) {
		const value = Array.isArray(item.value) ? item.value.join(", ") : item.value;
		result[item.field] = value;
	}
	return result;
}

export async function load({ params, fetch }) {
	const bookId = params.bookId;

	const res = await fetch(
		`https://webservices.memorix.nl/mediabank/media/${bookId}?apiKey=9b2c2e2e-0d8d-4858-8194-457df5251e1e`
	);

	if (!res.ok) {
		throw new Error("Kon boek niet ophalen");
	}

	const data = await res.json();
	const book = data.media?.[0];

	if (!book) {
		throw new Error("Geen boek gevonden");
	}

	// Voeg platte metadata toe aan het object
	const flatMeta = mapMetadata(book.metadata);
	const parsedBook = {
		...book,
		...flatMeta // bijv. parsedBook.auteur = "Epictetus"
	};

	return {
		book: parsedBook
	};
}
