var activeDropdown = null;

function toggleDropdown(event) {
    event.preventDefault();
    var dropdownId = event.target.getAttribute('data-dropdown');
    var dropdown = document.getElementById(dropdownId);

    if (activeDropdown && activeDropdown !== dropdown) {
        activeDropdown.style.display = 'none';
    }

    dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    activeDropdown = dropdown.style.display === 'block' ? dropdown : null;
}

var dropdownButtons = document.querySelectorAll(".dropbtn");
dropdownButtons.forEach(function(button) {
    button.addEventListener("click", toggleDropdown);
});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
        activeDropdown = null;
    }
}
