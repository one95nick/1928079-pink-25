const header = document.querySelector('header');
const headerToggle = document.querySelector('.header__toggle');

header.classList.remove('no-js');

headerToggle.addEventListener('click', () => header.classList.toggle('is-active'));
