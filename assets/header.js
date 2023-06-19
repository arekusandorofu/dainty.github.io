const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const menuBg = document.getElementById('menu-bg');

const cross = document.getElementById('cross');

burger.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menuBg.classList.toggle('hidden')
})

cross.addEventListener('click', () => {
    menu.classList.toggle('hidden')
    menuBg.classList.toggle('hidden')
})