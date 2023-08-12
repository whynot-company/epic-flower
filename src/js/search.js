// JavaScript
// Отримуємо посилання на кнопку відкриття модального вікна та на саме модальне вікно
const openModalBtn = document.getElementById('openSearch');
const openModalBtnMobile = document.getElementById('opensearch');
const closeModalBtn = document.getElementById('closeSearch');
const modal = document.getElementById('search');

// Функція, яка відкриває модальне вікно
function openModal() {
    modal.style.display = 'block';
}

// Функція, яка закриває модальне вікно
function closeModal() {
    modal.style.display = 'none';
}

// Додаємо обробник події для кнопки відкриття модального вікна
openModalBtn.addEventListener('click', openModal);

openModalBtnMobile.addEventListener('click', openModal);

// Додаємо обробник події для кнопки закриття модального вікна
closeModalBtn.addEventListener('click', closeModal);

// Додаємо обробник події для кліку за межі модального вікна, щоб закрити його при кліку поза вікном
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
})