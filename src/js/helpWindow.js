const openButtonHelp = document.querySelector('.buttonHelp');
const closeButtonHelp = document.querySelector('.closeHelpButton');
const content = document.getElementById('helpContent');

function openContent() {
    content.style.display = 'block';
}

function closeContent() {
    content.style.display = 'none';
}

openButtonHelp.addEventListener('click', openContent);

closeButtonHelp.addEventListener('click', closeContent);