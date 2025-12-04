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

function filterProductsBySearch(query) {
    const productContainer = document.querySelector('.row');
    const products = Array.from(productContainer.getElementsByClassName('col-lg-3'));
    products.forEach(product => {
        const title = product.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(query.toLowerCase())) {
            product.style.display = '';
        } else {
            product.style.display = 'none';
        }
    });
}

function setupFilters() {
    const filterSelect = document.getElementById('filter-select');
    filterSelect.addEventListener('change', (event) => {
        const selectedFilter = event.target.value;
        sortProducts(selectedFilter);
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('input', (event) => {
        const searchQuery = event.target.value;
        filterProductsBySearch(searchQuery);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupFilters();
    setupSearch();
});
