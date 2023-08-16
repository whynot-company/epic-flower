const hideCheckboxes = document.querySelectorAll('.hideCheckbox');
const hiddenContainers = document.querySelectorAll('.hiddenContainer');

hideCheckboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            hiddenContainers[index].style.display = 'none';
        } else {
            hiddenContainers[index].style.display = 'block';
        }
    });
});