const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-menu');
const menuCloseButton = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
  menu.classList.add("is-active");
  menuCloseButton.classList.add("is-active");
});

