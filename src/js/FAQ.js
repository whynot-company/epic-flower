// Отримуємо всі контейнери FAQ
const faqContainers = document.querySelectorAll('.faq-container');

// Функція для переключення відображення відповіді
function toggleAnswer() {
    const answer = this.querySelector('.answer');

    // Закриваємо всі відкриті спойлери
    faqContainers.forEach(container => {
        const otherAnswer = container.querySelector('.answer');
        if (otherAnswer !== answer && otherAnswer.style.display === 'block') {
            otherAnswer.style.display = 'none';
        }
    });

    // Відкриваємо або закриваємо поточний спойлер
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Додаємо обробник події для кожного контейнера FAQ
faqContainers.forEach(container => {
    container.addEventListener('click', toggleAnswer);
});
