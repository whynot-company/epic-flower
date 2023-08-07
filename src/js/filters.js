const once = document.getElementById('once');
const twice = document.getElementById('twice');
const products = document.getElementById('container-wrapper');

once.addEventListener('click', () => {
    products.classList.add('grid-cols-1');
});

twice.addEventListener('click', () => {
    products.classList.remove('grid-cols-1')
})