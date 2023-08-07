const prevNext = document.querySelectorAll('.prevNext'),
    numbers = document.querySelectorAll('.link');

let currentStep = 0;

const updateBtn = () => {
    if (currentStep === 5) {
        prevNext[1].disabled = true;
    } else if (currentStep === 0) {
        prevNext[0].disabled = true;
    } else {
        prevNext[1].disabled = false;
        prevNext[0].disabled = false;
    }
}

numbers.forEach((number, numIndex) => {
    number.addEventListener('click', (e) => {
        e.preventDefault();
        currentStep = numIndex;
        document.querySelector('.active').classList.remove('active');
        number.classList.add('active');
        updateBtn();
    });
});

prevNext.forEach((button) => {
    button.addEventListener("click", (e) => {
        currentStep += e.target.id === "next" ? 1 : -1;
        numbers.forEach((number, numIndex) => {
            number.classList.toggle("active", numIndex === currentStep);
        });
    });
});