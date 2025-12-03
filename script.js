function sortProducts(criteria) {
    const productContainer = document.querySelector('.row');
    const products = Array.from(productContainer.getElementsByClassName('col-lg-3'));
    let sortedProducts;
    if (criteria === 'alphabetical') {
        sortedProducts = products.sort((a, b) => {
            const titleA = a.querySelector('.card-title').textContent.toLowerCase();
            const titleB = b.querySelector('.card-title').textContent.toLowerCase();
            return titleA.localeCompare(titleB);
        });
    } else if (criteria === 'price-asc') {
        sortedProducts = products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.card-text').textContent.replace('R$', '').trim());
            const priceB = parseFloat(b.querySelector('.card-text').textContent.replace('R$', '').trim());
            return priceA - priceB;
        });
    } else if (criteria === 'price-desc') {
        sortedProducts = products.sort((a, b) => {
            const priceA = parseFloat(a.querySelector('.card-text').textContent.replace('R$', '').trim());
            const priceB = parseFloat(b.querySelector('.card-text').textContent.replace('R$', '').trim());
            return priceB - priceA;
        });
    }
    productContainer.innerHTML = '';
    sortedProducts.forEach(product => {
        productContainer.appendChild(product);
    });
}

function setupFilters() {
    const filterSelect = document.getElementById('filter-select');
    filterSelect.addEventListener('change', (event) => {
        const selectedFilter = event.target.value;
        sortProducts(selectedFilter);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
});