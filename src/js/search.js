function openSearch() {
    const searchForm = document.querySelector('.header__search');
    const logo = document.querySelector('.header__logo');
    const input = document.querySelector('.header__input');
    searchForm.classList.toggle('header__search--open');
    logo.classList.toggle('header__logo--hide');
    input.focus();
}
  
const showSearchButton = document.querySelector('.header__show-search');
showSearchButton.addEventListener('click', openSearch);