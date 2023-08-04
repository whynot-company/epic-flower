const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

openMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});