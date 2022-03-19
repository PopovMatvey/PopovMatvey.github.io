//Инициализация объекта калькулятора
let Calculator = {
    pricePerTypeSite: [10000, 5000, 5300, 20000, 30000],  //цены за учёт типа сайта
    timesPerTypeSite: [3, 1, 1.5, 7, 14],                   //сроки за учёт типа сайта
    pricePerDesignSite: [1000, 1500, 1100, 2000, 3000],   //цены за учёт дизайна сайта
    timesPerDesignSite: [1, 0.5, 1.3, 1.2, 1.1],                  //сроки за учёт дизайна сайта
    pricePerAdaptivity: [2000, 3500, 5000],               //цены за учёт аддаптивности сайта
    timesPerAdaptivity: [1, 1.3, 2],                        //сроки за учёт аддаптивности сайта

    // расчёт сроков 
    calculateTimes(timesPerTypeSite, timesPerDesignSite, timesPerAdaptivity) {
        return timesPerTypeSite + timesPerDesignSite + timesPerAdaptivity;
    },

    // расчёт стоимости
    calculatePrice(pricePerTypeSite, pricePerDesignSite, pricePerAdaptivity) {
        return pricePerTypeSite + pricePerDesignSite + pricePerAdaptivity;
    },

}

// пременные для калькулятора стоимости
let varChoose = 0;              // вариант, выбранный пользователем
let check = true;               // проверка правильности ввода
let index = 0;                  // преобразованный индекс, для нахождения нужного элемента из массива
let pricePerTypeSite = 0;       // цена за учёт типа сайта
let timesPerTypeSite = 0;       // срок за учёт типа сайта
let pricePerDesignSite = 0;     // цена за учёт дизайна сайта
let timesPerDesignSite = 0;     // срок за учёт дизайна сайта
let pricePerAdaptivity = 0;     // цена за учёт аддаптивности сайта
let timesPerAdaptivity = 0;     // срок за учёт аддаптивности сайта
let typeSiteStr = "";           // строка для сравнения типа сайта
let clickCount = 0;             // количество кликов selector
let designSiteStr = "";         // строка для сравнения дизайна сайта
let addaptSiteStr = "";         // строка для сравнения аддаптивности сайта
let time = document.querySelector("#time");
let cost = document.querySelector("#cost");
let options = { threshold: [0.5] }; 

// Переменные для аддаптивного NavBar
let cheker = 0; // Проверка нажатия на кнопка управдения меню


// Ожидание прогрузки страницы
$(document).ready(function () {

    // Модальное открытие изображений
    $('.image-link').magnificPopup({ type: 'image' });


    /*Адаптивное меню*/

    // Изменение размеров окна
    $(window).resize(function () {
        // Если размер окна меньше 991px и блок "Мобильное меню" имеет класс "d-block" и не имеет класс "d-none"
        if ((screen.width > 991) && (($(".menu-mobile").hasClass("d-block")) && !(($(".menu-mobile").hasClass("d-none"))))) {
            $('.menu-mobile').addClass("d-none");
            $('.menu-mobile').removeClass("d-block");
            $('.fa').removeClass("icon-times");
            $('.fa').addClass("icon-align-justify");
            cheker = 0;
        }
        // Если размер окна больше 991px и блок "Мобильное меню" имеет класс "d-none" и не имеет класс "d-block"
        else if ((screen.width < 991) && (($(".menu-mobile").hasClass("d-none")) && (($(".menu-mobile").hasClass("d-block"))))) {
            $('.fa').removeClass("icon-align-justify");
            $('.fa').addClass("icon-times");
            $('.menu-mobile').addClass("d-block");
            $('.menu-mobile').removeClass("d-none");

        }
    });

    // Нажатие на кнопку управления меню
    $('.menu-manip').click(function () {
        cheker++;
        if (cheker % 2 != 0) {
            $('.fa').removeClass("icon-align-justify");
            $('.fa').addClass("icon-times");
            $('.menu-mobile').addClass("d-block");
            $('.menu-mobile').removeClass("d-none");
        } else if (cheker % 2 == 0) {
            $('.fa').removeClass("icon-times");
            $('.fa').addClass("icon-align-justify");
            $('.menu-mobile').addClass("d-none");
            $('.menu-mobile').removeClass("d-block");
            cheker = 0;
        }



    });


    /*Калькулятор стоимости*/
    /*Отработка калькулятора при запуске */

    getIndexTypeSite($("#sel_type_site").val());
    pricePerTypeSite = Calculator.pricePerTypeSite[getIndexTypeSite($("#sel_type_site").val())];
    timesPerTypeSite = Calculator.timesPerTypeSite[getIndexTypeSite($("#sel_type_site").val())];

    getIndexDesignSite($("#sel_dis_site").val());
    pricePerDesignSite = Calculator.pricePerDesignSite[getIndexDesignSite($("#sel_dis_site").val())];
    timesPerDesignSite = Calculator.timesPerDesignSite[getIndexDesignSite($("#sel_dis_site").val())];

    getIndexAddaptSite($("#sel_addapt_site").val());
    pricePerAdaptivity = Calculator.pricePerAdaptivity[getIndexAddaptSite($("#sel_addapt_site").val())];
    timesPerAdaptivity = Calculator.timesPerAdaptivity[getIndexAddaptSite($("#sel_addapt_site").val())];

    time.innerHTML = Calculator.calculateTimes(timesPerTypeSite, timesPerDesignSite, timesPerAdaptivity) + " дней";
    cost.innerHTML = Calculator.calculatePrice(pricePerTypeSite, pricePerDesignSite, pricePerAdaptivity) + " рублей";

    //Выбор типа сайта
    $("#sel_type_site").click(function () {
        if (++clickCount % 2 == 0) {
            typeSiteStr = $("#sel_type_site").val();
            console.log(typeSiteStr);
            clickCount = 0;
            getIndexTypeSite(typeSiteStr);
            pricePerTypeSite = Calculator.pricePerTypeSite[indexTypeSite];
            timesPerTypeSite = Calculator.timesPerTypeSite[indexTypeSite];


            console.log(Calculator.calculatePrice(pricePerTypeSite, pricePerDesignSite, pricePerAdaptivity));
            console.log(Calculator.calculateTimes(timesPerTypeSite, timesPerDesignSite, timesPerAdaptivity));

            time.innerHTML = Calculator.calculateTimes(timesPerTypeSite, timesPerDesignSite, timesPerAdaptivity) + " дней";
            cost.innerHTML = Calculator.calculatePrice(pricePerTypeSite, pricePerDesignSite, pricePerAdaptivity) + " рублей";
        }
    });

    //Выбор дизайна сайта
    $("#sel_dis_site").click(function () {
        if (++clickCount % 2 == 0) {
            designSiteStr = $("#sel_dis_site").val();
            console.log(designSiteStr);
            clickCount = 0;
            getIndexDesignSite(designSiteStr);
            pricePerDesignSite = Calculator.pricePerDesignSite[indexDesignSite];
            timesPerDesignSite = Calculator.timesPerDesignSite[indexDesignSite];

            console.log(Calculator.calculatePrice(pricePerTypeSite, pricePerDesignSite, pricePerAdaptivity));
            console.log(Calculator.calculateTimes(timesPerTypeSite, timesPerDesignSite, timesPerAdaptivity));

            time.innerHTML = Calculator.calculateTimes(timesPerTypeSite, timesPerDesignSite, timesPerAdaptivity) + " дней";
            cost.innerHTML = Calculator.calculatePrice(pricePerTypeSite, pricePerDesignSite, pricePerAdaptivity) + " рублей";

        }
    });

    //Выбор аддаптивности сайта
    $("#sel_addapt_site").click(function () {
        if (++clickCount % 2 == 0) {
            addaptSiteStr = $("#sel_addapt_site").val();
            console.log(addaptSiteStr);
            clickCount = 0;
            indexAddapSite = getIndexAddaptSite(addaptSiteStr);
            pricePerAdaptivity = Calculator.pricePerAdaptivity[indexAddptSite];
            timesPerAdaptivity = Calculator.timesPerAdaptivity[indexAddptSite];

            console.log(Calculator.calculatePrice(pricePerTypeSite, pricePerDesignSite, pricePerAdaptivity));
            console.log(Calculator.calculateTimes(timesPerTypeSite, timesPerDesignSite, timesPerAdaptivity));

            time.innerHTML = Calculator.calculateTimes(timesPerTypeSite, timesPerDesignSite, timesPerAdaptivity) + " дней";
            cost.innerHTML = Calculator.calculatePrice(pricePerTypeSite, pricePerDesignSite, pricePerAdaptivity) + " рублей";
        }
    });


    // Анимация цифр для статистики
    getAnimationnumbers(".statistic");

    // Анимация цифр для навыков
    getAnimationnumbers(".skills");

    //Таймер показа предложения
    setTimeout(showSentece, 30000);

});


//Получить индекс типа сайта
function getIndexTypeSite(parTypeSiteStr) {
    if (parTypeSiteStr == "Комерческий") {
        return indexTypeSite = 0;
    }
    if (parTypeSiteStr == "Одностраничник") {
        return indexTypeSite = 1;
    }
    if (parTypeSiteStr == "Сайт-визитка") {
        return indexTypeSite = 2;
    }
    if (parTypeSiteStr == "Онлайн магазин") {
        return indexTypeSite = 3;
    }
    if (parTypeSiteStr == "WEB-приложение") {
        return indexTypeSite = 4;
    }
}

//Получить индекс дизайна сайта
function getIndexDesignSite(parDesignSiteStr) {
    if (parDesignSiteStr == "Минимализм") {
        return indexDesignSite = 0;
    }
    if (parDesignSiteStr == "Классический стиль") {
        return indexDesignSite = 1;
    }
    if (parDesignSiteStr == "Корпоративный стиль") {
        return indexDesignSite = 2;
    }
    if (parDesignSiteStr == "Информационный") {
        return indexDesignSite = 3;
    }
    if (parDesignSiteStr == "Ретро") {
        return indexDesignSite = 4;
    }
}

//Получить индекс аддаптивности сайта
function getIndexAddaptSite(parAddaptSiteStr) {
    if (parAddaptSiteStr == "Под мобильные устройства") {
        return indexAddptSite = 0;
    }
    if (parAddaptSiteStr == "Под персональные компьютеры") {
        return indexAddptSite = 1;
    }
    if (parAddaptSiteStr == "Универсальная") {
        return indexAddptSite = 2;
    }
}

function getAnimationnumbers(block) {
    var show = true;
    var countbox = block;
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.number').css('opacity', '1');
            $('.number').spincrement({
                thousandSeparator: "",
                duration: 5000
            });

            show = false;
        }
    });
}

//Показ предложения
function showSentece() {
    var myModal = new bootstrap.Modal(document.getElementById('Modal'), options);
    myModal.show();
}