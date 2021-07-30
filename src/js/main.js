document.addEventListener("DOMContentLoaded", function () {

    // Подключаем табы
    let tabsList = new tabs();

    tabsList.clickHandlerCreate();


    // Подключаем мобильное меню

    mobileMenu();
    //  Подключаем слайдер


    new Splide('.main-splide', {
        arrows: false,
        fixedWidth: '760px',
        autoplay: true,
        type: 'fade',
        breakpoints: {
            '759': {
                fixedWidth: 0
            }
        }
    }).mount();

    let empty,
        slidersList = {
            elements: empty,
            splider: []
        };
    slidersList.elements = document.querySelectorAll('.placeholder-splide');

    slidersList.elements.forEach((item) => {
        let slider = new Splide(item, {
            arrows: false,
            fixedWidth: '760px',
            autoplay: true,
            type: 'fade'

        });
        slider.mount();
        slidersList.splider.push(slider)
    })


    // console.log(mainSlaider);
});