export async function load({ url }) {
    const exhibitions = await fetch("https://fdnd-agency.directus.app/items/efm_exhibitions");
    const exhibitionsData = await exhibitions.json();

    return { exhibitions: exhibitionsData.data };
}