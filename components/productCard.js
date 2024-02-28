export const productCard = (product) => {
    return `
    <div class="card-container bg-gray-100 rounded-md shadow-md overflow-hidden">
        <img class="card-image object-cover w-full h-48" src="${product.images}" alt="${product.title}">
        <div class="card-content p-4">
            <h2 class="card-title text-xl font-semibold text-gray-800">${product.title}</h2>
            <p class="card-brand text-sm font-light text-gray-600">${product.brand}</p>
            <p class="card-price mt-2 text-lg font-semibold text-red-500">$${product.price}</p>
        </div>
    </div>
    `
}