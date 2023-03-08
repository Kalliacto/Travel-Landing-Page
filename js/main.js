const header = document.querySelector('.header');

(function () {
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_scroll');
        }
        if (window.pageYOffset === 0) {
            header.classList.remove('header_scroll');
        }
    }
}());
