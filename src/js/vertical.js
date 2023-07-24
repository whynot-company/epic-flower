document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.slider-container');
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const slideCount = slides.length;
    let currentSlide = 0;

    // Відображення перших двох слайдів
    slides[currentSlide].classList.add('active');
    slides[(currentSlide + 1) % slideCount].classList.add('active');

    // Функція для показу наступних двох слайдів
    function showNextSlides() {
        slides[currentSlide].classList.remove('active'); // Сховати поточні слайди
        slides[(currentSlide + 1) % slideCount].classList.remove('active');

        // Збільшуємо індекс поточного слайда
        currentSlide = (currentSlide + 2) % slideCount;

        slides[currentSlide].classList.add('active'); // Показати наступні два слайди
        slides[(currentSlide + 1) % slideCount].classList.add('active');

        // Зміна коліру кнопки "Попередній"
        prevBtn.classList.add('active');
        nextBtn.classList.remove('active');
    }

    // Функція для показу попередніх двох слайдів
    function showPrevSlides() {
        slides[currentSlide].classList.remove('active'); // Сховати поточні слайди
        slides[(currentSlide + 1) % slideCount].classList.remove('active');

        // Зменшуємо індекс поточного слайда
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;

        slides[currentSlide].classList.add('active'); // Показати поточний та попередній слайди
        slides[(currentSlide + 1) % slideCount].classList.add('active');

        // Зміна коліру кнопки "Попередній"
        prevBtn.classList.remove('active');
        nextBtn.classList.add('active');
    }

    // Запускаємо автоматичне переключення слайдів кожні 3 секунди
    setInterval(showNextSlides, 3000);

    // Обробник події для кнопки "Наступний"
    const nextBtn = document.querySelector('.next-btn');
    nextBtn.addEventListener('click', showNextSlides);

    // Обробник події для кнопки "Попередній"
    const prevBtn = document.querySelector('.prev-btn');
    prevBtn.addEventListener('click', showPrevSlides);
});
