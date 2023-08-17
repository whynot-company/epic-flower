const openLocationBtn = document.getElementById('openLocation');
const openLocationBtnMobile = document.getElementById('openLocationMobile');
const closeLocationBtn = document.getElementById('closeLocation');
const locationModal = document.getElementById('location');

function openModal() {
    locationModal.classList.remove('hidden');
}

function closeModal() {
    locationModal.classList.add('hidden');
}

openLocationBtn.addEventListener('click', openModal);
openLocationBtnMobile.addEventListener('click', openModal);

closeLocationBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === locationModal) {
        closeModal();
    }
});
