const openForm = document.getElementById('modal');
const form = document.getElementById('modal-content');
const closs = document.getElementById('close');
const openButton = document.getElementById('openButton');
const send = document.getElementById('send');
const thanks = document.getElementById('thanks');
const openBasket = document.getElementById('open-basket');
const basket = document.getElementById('basket');
const closeBasket = document.getElementById('close-basket');
const content = document.getElementById('content');

openButton.onclick = function () {
    if (openForm.style.display = 'none') {
        openForm.style.display = 'block';
    }
};

closs.onclick = function () {
    if (form.style.display = 'block') {
        form.style.display = 'none';
    }
}

closs.onclick = function () {
    if (openForm.style.display = 'block') {
        openForm.style.display = 'none';
    }
}

// openForm.onclick = function () {
//     if (openForm.style.display = 'block') {
//         openForm.style.display = 'none';
//     } 
// }

openBasket.onclick = function () {
    if (basket.style.display = 'none') {
        basket.style.display = 'block' ;
    }
}

closeBasket.onclick = function () {
    if (basket.style.display = 'block') {
        basket.style.display = 'none';
    }
}

if (basket.style.display = 'none') {
    content.style.display = 'block';
} 
