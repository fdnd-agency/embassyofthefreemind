export async function load({ params }) {
    return {
        title: params.slug.replaceAll('-', ' ')
    }
}