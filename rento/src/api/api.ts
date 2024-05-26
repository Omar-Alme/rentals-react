export async function fetchProducts() {
    const response = await fetch('https://www.bortakvall.se/api/v2/products');
    const products = await response.json();
    return products
}