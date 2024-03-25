document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const products = document.querySelectorAll('.product');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        products.forEach(product => {
            const productName = product.dataset.name.toLowerCase();
            const productCode = product.dataset.code.toLowerCase();
            if (productName.includes(searchTerm) || productCode.includes(searchTerm)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
