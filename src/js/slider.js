// // Зберігаємо всі товари тут
// let allProducts = [];

// // Функція для зроблення AJAX-запиту до сервера
// function fetchProducts() {
//     return fetch('https://642aedd7b11efeb759a684be.mockapi.io/photos') // Замініть це посилання на ваш URL сервера
//         .then(response => response.json())
//         .catch(error => console.error('Помилка отримання даних:', error));
// }

// function createProductCard(product) {
//     return `
//         <div class="card">
//             <img src="${product.url2}">
//             <h3>${product.title2}</h3>
//             <p>Ціна: ${product.price2} грн</p>
//         </div>
//     `;
// }

// function populateSlider(products) {
//     const slider = document.getElementById('slider');
//     slider.innerHTML = products.map(createProductCard).join('');
// }

// // Головна функція для ініціалізації слайдера
// async function initSlider() {
//     allProducts = await fetchProducts();

//     // Початкова кількість відображуваних товарів
//     const initialProducts = 4;
//     let visibleProducts = allProducts.slice(0, initialProducts);

//     populateSlider(visibleProducts);

//     let slidePosition = 0;
//     const slides = document.getElementsByClassName('card');
//     const totalSlides = allProducts.length;
//     const slideWidth = slides[0].offsetWidth + 20;

//     // Функція для переміщення слайдів
//     function updateSlidePosition() {
//         for (let slide of slides) {
//             slide.style.transform = `translateX(-${slidePosition}px)`;
//         }
//     }

//     // Кнопка "Назад"
//     document.querySelector('.prev').addEventListener('click', function () {
//         if (slidePosition > 0) {
//             slidePosition -= slideWidth;
//             updateSlidePosition();
//         }
//     });

//     // Кнопка "Вперед"
//     document.querySelector('.next').addEventListener('click', function () {
//         if (slidePosition < (totalSlides - initialProducts) * slideWidth) {
//             slidePosition += slideWidth;
//             updateSlidePosition();
//         }
//     });
// }

// // Ініціалізуємо слайдер при завантаженні сторінки
// document.addEventListener('DOMContentLoaded', initSlider);