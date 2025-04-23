// place files you want to import through the `$lib` alias in this folder.
export function arrayToObject(array) {
    const result = {};
    for (const entry of array) {
        result[entry.field] = entry.value;
    }
    return result;
}