const menu = document.querySelector(".container-menu-burger");

const active = () => menu.classList.toggle('active');

menu.addEventListener('click', active);