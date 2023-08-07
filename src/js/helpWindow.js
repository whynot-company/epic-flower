const openButton = document.querySelector('.buttonHelp'),
    closeButton = document.querySelector('.closeHelpButton'),
    content = document.getElementById('helpContent');

openButton.addEventListener('click', () => {
    content.style.display = 'block';
});

closeButton.addEventListener('click', () => {
    content.style.display = "none";
})