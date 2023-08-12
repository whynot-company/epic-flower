const openForm = document.getElementById('modal');
const form = document.getElementById('modal-content');
const closs = document.getElementById('close');
const openButton = document.getElementById('openButton');
const send = document.getElementById('send');

function closeContent() {
    openForm.style.display = 'none';
}

function openContent() {
    openForm.style.display = 'block';
}

openButton.addEventListener('click', openContent);

closs.addEventListener('click', closeContent);

send.addEventListener('click', closeContent);