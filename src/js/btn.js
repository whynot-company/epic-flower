const buttons = document.querySelectorAll('.btn');

function selectButton() {
    buttons.forEach(button => button.classList.remove('bg-[#87A7BE]', 'text-white'));
    this.classList.add('bg-[#87A7BE]', 'text-white');
}

buttons.forEach(button => button.addEventListener('click', selectButton));
