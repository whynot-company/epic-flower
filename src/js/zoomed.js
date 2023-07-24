function zoomImage(event) {
    const container = event.currentTarget;
    const image = container.querySelector('img');

    // Отримуємо розміри контейнера та зображення
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;

    // Обчислюємо координати курсора в контейнері
    const x = event.clientX - container.offsetLeft;
    const y = event.clientY - container.offsetTop;

    // Обчислюємо відносні координати курсора на зображенні
    const relativeX = x / containerWidth;
    const relativeY = y / containerHeight;

    // Встановлюємо значення transform для зображення
    const zoomLevel = 2; // Збільшуємо зображення вдвічі
    image.style.transform = `scale(${zoomLevel}) translate(-${relativeX * (zoomLevel - 1) * imageWidth}px, -${relativeY * (zoomLevel - 1) * imageHeight}px)`;
}

function resetZoom() {
    const image = document.getElementById('zoomImg');
    image.style.transform = 'scale(1) translate(0, 0)';
}
