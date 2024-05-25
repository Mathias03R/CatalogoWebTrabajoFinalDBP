const priceRangeInput = document.getElementById('price-filter');
const applyFilterBtn = document.getElementById('apply-filter-btn');
const productList = document.getElementById('product-list');
const rangeValue = document.getElementById("rangeValue");
const sizeFilter = document.getElementById('size-filter');

priceRangeInput.addEventListener("input", function() {
    rangeValue.textContent = priceRangeInput.value;
});

function applyFilter() {
    productList.querySelectorAll('.product-item').forEach(product => {
        product.style.display = "flex";
        const price = parseInt(product.dataset.price);

        if (sizeFilter.value !== "all") {
            if (product.classList[1] !== sizeFilter.value) {
                product.style.display = "none";
            }
        }
        
        if (price <= priceRangeInput.value && product.style.display != "none") {
            product.style.display = "flex";
        }
        else {
            product.style.display = "none";
        }
    })
}

applyFilterBtn.addEventListener('click', applyFilter);