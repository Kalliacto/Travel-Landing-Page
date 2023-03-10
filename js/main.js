(function () {
    const header = document.querySelector('.header');

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_scroll');
        }
        if (window.pageYOffset === 0) {
            header.classList.remove('header_scroll');
        }
    }
}());



(function () {
    const burger = document.querySelector('.burger');
    const headerMenu = document.querySelector('.header__menu');

    burger.addEventListener('click', () => {
        headerMenu.classList.add('header__menu_active');
    })

    const burgerClose = document.querySelector('.header__burger-close');

    burgerClose.addEventListener('click', () => {
        headerMenu.classList.remove('header__menu_active');
    })
}());
