const openModalBtn = document.getElementById('openSearch');
const openModalBtnMobile = document.getElementById('opensearch');
const closeModalBtn = document.getElementById('closeSearch');
const modal = document.getElementById('search');

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

openModalBtn.addEventListener('click', openModal);

openModalBtnMobile.addEventListener('click', openModal);

closeModalBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
})