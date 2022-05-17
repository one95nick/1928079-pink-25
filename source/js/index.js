const header = document.querySelector('header');
const headerToggle = document.querySelector('.header__toggle');

headerToggle.addEventListener('click', () => header.classList.toggle('is-active'));
