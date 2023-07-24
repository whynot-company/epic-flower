// Отримуємо всі контейнери FAQ
const faqContainers = document.querySelectorAll('.faq-container');

// Функція для переключення відображення відповіді
function toggleAnswer() {
    const answer = this.querySelector('.answer');
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Додаємо обробник події для кожного контейнера FAQ
faqContainers.forEach(container => {
    container.addEventListener('click', toggleAnswer);
});
