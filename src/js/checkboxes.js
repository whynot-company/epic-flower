const checkboxIds = ['checkbox1', 'checkbox2', 'checkbox4', 'checkbox5']; // Замість 'checkbox1', 'checkbox2', 'checkbox3' додайте свої ID checkbox'ів

checkboxIds.forEach(checkboxId => {
    const checkbox = document.getElementById(checkboxId);
    
    if (checkbox) {
        checkbox.addEventListener('change', function () {
            if (this.checked) {
                checkboxIds.forEach(otherId => {
                    if (otherId !== checkboxId) {
                        const otherCheckbox = document.getElementById(otherId);
                        if (otherCheckbox) {
                            otherCheckbox.checked = false;
                        }
                    }
                });
            }
        });
    }
});
