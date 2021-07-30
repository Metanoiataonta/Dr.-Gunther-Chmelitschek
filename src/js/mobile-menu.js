function mobileMenu() {
    let menuButton = document.querySelector('.menu'),
        tabButtons = document.querySelectorAll('.header__button'),
        nav = document.querySelector('.header__nav');
    nav.addEventListener('click', function (event) {
        console.log(event, this);
        // Анимация кнопки
        menuButton.classList.toggle('opened');
        menuButton.setAttribute('aria-expanded', menuButton.classList.contains('opened'))

        tabButtons.forEach((item) => item.classList.toggle('header__button_list-active'));


    });
}