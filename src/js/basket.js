const product = document.getElementById('product');
const productMobile = document.getElementById('productMobile');
const clear = document.getElementById('clear');
const clearMobile = document.getElementById('clearMobile');

function deleteProduct() {
    product.style.display = 'none';
}

function deleteProductMobile() {
    productMobile.style.display = 'none';
}

clear.addEventListener('click', deleteProduct);

clearMobile.addEventListener('click', deleteProductMobile);