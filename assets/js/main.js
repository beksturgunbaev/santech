// Open mobile menu

let burgerBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.mobile-menu');
let menuContent = document.querySelector('.mobile-menu__content');

const openMenu = () => {
    menu.classList.add('active');
    menuContent.classList.add('active');
}
const closeMenu = (e) => {
    if(e.target != menuContent) {
        menu.classList.remove('active');
        menuContent.classList.remove('active');
    }
}

burgerBtn.addEventListener('click', openMenu);
menu.addEventListener('click', closeMenu);