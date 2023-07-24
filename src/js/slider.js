const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderContainer = document.getElementById('sliderContainer');
const slides = document.querySelectorAll('#sliderContainer > div');
const interval = 3000; // Time in milliseconds between auto slide change
const slidesToShow = 5; // Number of slides to show at a time

let slideIndex = 0;
let timer;

function showSlide(index) {
    slides.forEach((slide) => (slide.style.display = 'none'));
    for (let i = 0; i < slidesToShow; i++) {
        const slideToShow = (index + i) % slides.length;
        slides[slideToShow].style.display = 'block';
    }
}

function nextSlide() {
    slideIndex = (slideIndex + slidesToShow) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - slidesToShow + slides.length) % slides.length;
    showSlide(slideIndex);
}

function startAutoSlide() {
    timer = setInterval(nextSlide, interval);
}

function stopAutoSlide() {
    clearInterval(timer);
}

prevBtn.addEventListener('click', () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
});

nextBtn.addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
});

// Show the first set of slides and start the auto slide
showSlide(slideIndex);
startAutoSlide();

const prevBtn1 = document.getElementById('prevBtn1');
const nextBtn1 = document.getElementById('nextBtn1');
const sliderContainer1 = document.getElementById('sliderContainer1');
const slides1 = document.querySelectorAll('#sliderContainer1 > div');
const interval1 = 3000; // Час у мілісекундах між автоматичною зміною слайдів для першого слайдера
const slidesToShow1 = 5; // Кількість слайдів, які показуються одночасно для першого слайдера

let currentIndex1 = 0;
let timer1;

function showSlide1(index) {
    const startSlide = index % slides1.length;
    for (let i = 0; i < slidesToShow1; i++) {
        const slideToShow = (startSlide + i) % slides1.length;
        slides1[slideToShow].style.display = 'block';
    }
}

function hideAllSlides1() {
    slides1.forEach((slide) => (slide.style.display = 'none'));
}

function nextSlide1() {
    hideAllSlides1();
    currentIndex1++;
    showSlide1(currentIndex1);
}

function prevSlide1() {
    hideAllSlides1();
    currentIndex1--;
    if (currentIndex1 < 0) {
        currentIndex1 = slides1.length - 1;
    }
    showSlide1(currentIndex1);
}

function startAutoSlide1() {
    timer1 = setInterval(nextSlide1, interval1);
}

function stopAutoSlide1() {
    clearInterval(timer1);
}

prevBtn1.addEventListener('click', () => {
    stopAutoSlide1();
    prevSlide1();
    startAutoSlide1();
});

nextBtn1.addEventListener('click', () => {
    stopAutoSlide1();
    nextSlide1();
    startAutoSlide1();
});

// Показати перший набір слайдів та запустити автоматичний слайдер
showSlide1(currentIndex1);
startAutoSlide1();