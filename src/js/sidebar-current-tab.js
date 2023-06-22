const details = document.querySelector('.sidebar__details');
const submenuItems = document.querySelectorAll('.sidebar__submenu-item');


const hasCurrentClass = Array.from(submenuItems).some(item =>
    item.classList.contains('sidebar__submenu-item--current')
);

if (hasCurrentClass) {
    details.open = true;
}






