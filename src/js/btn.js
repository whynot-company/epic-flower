const buttons = document.querySelectorAll('.btn');

function selectButton() {
    buttons.forEach(button => button.classList.remove('bg-slate-400', 'text-white'));
    this.classList.add('bg-slate-400', 'text-white');
}

buttons.forEach(button => button.addEventListener('click', selectButton));
