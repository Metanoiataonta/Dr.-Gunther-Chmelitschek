class tabs {
    constructor() {
        //     Список кнопок
        this.buttons = document.querySelectorAll('.header__button');
        //     Список вкладок
        this.elements = document.querySelectorAll(' .tab');
    }


    clickHandlerCreate() {
        for (let button of this.buttons) {
            let className = button.id,
                tab;
            className = 'tab__' + className;
            tab = document.querySelector(`.${className}`);

            button.addEventListener('click', () => {
                this.handler(button, tab);
            });
        }

    }

    handler(button, tab) {

        let activeButton = document.querySelector(`.header__button_active`),
            activeTab = document.querySelector(`.tab__active`);

        if (tab != activeTab) {
            activeButton.classList.remove('header__button_active');
            activeTab.classList.remove(`tab__active`);
            button.classList.add(`header__button_active`);
            tab.classList.add(`tab__active`);

        }
    }


}