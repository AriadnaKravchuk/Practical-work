const sidebarToggle = document.querySelector('.hamburger-menu__checkbox');
const sidebar = document.querySelector('.sidebar');

sidebarToggle.addEventListener('change', () => {
    sidebar.classList.toggle("sidebar--open");
});