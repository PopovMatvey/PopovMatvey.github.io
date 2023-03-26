//После загрузки страницы
$(document).ready(function () {

    // Прогрузка основной картики при скроле до неё
    function showBeginImgMe() {
        let option = { threshold: [0.1] };
        let observer = new IntersectionObserver(getMainImgMe, option);
        let elements = $('.begin-page_img');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация для заголовка "Обо мне"
    function showAboutMeTittle() {
        let options = { threshold: [0.5] };
        let observer = new IntersectionObserver(getAnimationTitleAbtMe, options);
        let elements = $('.about-me__title');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация для картинки в блоке "Обо мне"
    function showAboutImg() {
        let options = { threshold: [0.1] };
        let observer = new IntersectionObserver(getAnimationImgAbtMe, options);
        let elements = $('.about-me_img');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    // Анимация для текста в блоке "Обо мне"
    function showAboutMeText() {
        let options = { threshold: [0.1] };
        let observer = new IntersectionObserver(getAnimationTextAbtMe, options);
        let elements = $('.about-me_text');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация для кнопки "Скачать резюме"
    function showDownloadResume() {
        let options = { threshold: [0.1] };
        let observer = new IntersectionObserver(getAnimationDownloadResume, options);
        let elements = $('.about-me_button');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация для заголовка блока "Что я умею"
    function showTittleMySkills() {
        let options = { threshold: [1] };
        let observer = new IntersectionObserver(getAnimationTitleMySkills, options);
        let elements = $('.title_my_skills');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация блока "Веб-дизайн" в блоке "Что я умею"
    function showWebDesine() {
        let options = { threshold: [0.2] };
        let observer = new IntersectionObserver(getAnimationWebDesine, options);
        let elements = $('.web-desine ');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация блока "Разработка" в блоке "Что я умею"
    function showDevolopment() {
        let options = { threshold: [0.2] };
        let observer = new IntersectionObserver(getAnimationDevolopment, options);
        let elements = $('.development');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация блока "Сео-оптимизация" в блоке "Что я умею"
    function showCeo() {
        let options = { threshold: [0.2] };
        let observer = new IntersectionObserver(getAnimationCeo, options);
        let elements = $('.ceo');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация блока "Маркетинг" в блоке "Что я умею"
    function showMarketing() {
        let options = { threshold: [0.2] };
        let observer = new IntersectionObserver(getAnimationMarketing, options);
        let elements = $('.marketing');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация для блока "Навыки" 
    function showprogressRing() {
        let options = { threshold: [0.2] };
        let observer = new IntersectionObserver(getAnimationSkills, options);
        let elements = $('.progress-ring-block');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация для блока названия навыка 
    function showNameSkill() {
        let options = { threshold: [0.2] };
        let observer = new IntersectionObserver(getAnimationNameSkill, options);
        let elements = $('.progress-name');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация заголовка в блоке "Портфолио"
    function showTitleportfolio() {
        let options = { threshold: [0.2] };
        let observer = new IntersectionObserver(getAnimationTitleCases, options);
        let elements = $('.portfolio-title');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация заголовка в блоке "Кейсы"
    function showSlider() {
        let options = { threshold: [0.2] };
        let observer = new IntersectionObserver(getAnimationCases, options);
        let elements = $('.slider_pattern');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация для описания проекта
    function showPortfolio() {
        let options = { threshold: [0.1] };
        let observer = new IntersectionObserver(getAnimationPortfolio, options);
        let elements = $('.portfolio-base');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация для блока "Калькулятор"
    function showCalculator() {
        let options = { threshold: [0.2] };
        let observer = new IntersectionObserver(getAnimationCalculator, options);
        let elements = $('.calculator');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация статистики
    function showStatistic() {
        let options = { threshold: [0.1] };
        let observer = new IntersectionObserver(getAnimationStatistic, options);
        let elements = $('.statistic');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Анимация Отзывов
    function showReviews() {
        let options = { threshold: [0.5] };
        let observer = new IntersectionObserver(getAnimationReviews, options);
        let elements = $('.reviews');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    // Анимация полей ввода формы
    function showFormInput() {
        let options = { threshold: [0.5] };
        let observer = new IntersectionObserver(getAnimationFormInput, options);
        let elements = $('.form-field__input');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    // Анимация поля формы сообщения
    function showFormMessage() {
        let options = { threshold: [0.5] };
        let observer = new IntersectionObserver(getAnimationFormMessage, options);
        let elements = $('.form-field__message');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    // Анимация для карты
    function showMap() {
        let options = { threshold: [0.5] };
        let observer = new IntersectionObserver(getAnimationMap, options);
        let elements = $('#map');
        elements.each((i, el) => {
            observer.observe(el);
        });
    }

    //Отобразить анимации и прогрузки изображений

    // Начальная страница
    showBeginImgMe();

    // Анимации в блоке "Обо мне"
    showAboutMeTittle();
    showAboutImg();
    showAboutMeText();
    showDownloadResume();

    // Анимации в блоке "Что я умею"
    showTittleMySkills();
    showWebDesine();
    showDevolopment();
    showCeo();
    showMarketing();

    // Анимации в блоке "Навыки"
    showprogressRing();
    showNameSkill();

    // Анимации в блоке "Портфолио"
    showTitleportfolio();
    showSlider();
    showPortfolio();

    // Анимация в блоке "Калькулятор"
    showCalculator();

    // Анимация в блоке "Статистика"
    showStatistic();

    // Анимация в блоке "Отзывы"
    showReviews();

    // Элементы формы
    showFormInput();
    showFormMessage();

    // Карта
    showMap();
});

// Получить качественное изображение себя на основной странице
function getMainImgMe(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.innerHTML = "<img src='assets/img//deal-icon-обр-removebg-preview-backer-removebg-preview.png' class='img' alt=''>";
        }
    });
}

// //Получить анимацию для заголовка "Обо мне"
function getAnimationTitleAbtMe(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('about-me__title__animation');
        }
    });
}

// Получить анимация заголовку "Что я умею"
function getAnimationTitleMySkills(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('title_my_skills_animation');
        }
    });
}


// Получить анимацию картинке в блоке "Обо мне"
function getAnimationImgAbtMe(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.innerHTML = "<img src='assets/img/imgAboutMe.png' alt='Моё изображение'>";
            change.target.classList.add('about_me_text_animation');
        }
    });
}

// Получить анимацию тексту в блоке "Обо мне"
function getAnimationTextAbtMe(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('about_me_text_animation');
        }
    });
}

//Получить анимацию кнопке "Скачать резюме"
function getAnimationDownloadResume(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('about-me_button_animation');
        }
    });
}


//Получить анимацию для раздела "Веб-дизайн" в блоке "Что я умею"
function getAnimationWebDesine(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('web-desine_animation');
        }
    });
}

//Получить анимацию для раздела "Разработка" в блоке "Что я умею"
function getAnimationDevolopment(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('development_animation');
        }
    });
}

//Получить анимацию для раздела "СЕО-оптимизация" в блоке "Что я умею"
function getAnimationCeo(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('ceo_animation');
        }
    });
}

//Получить анимацию для раздела "Маркетинг" в блоке "Что я умею"
function getAnimationMarketing(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('marketing_animation');
        }
    });
}

//Получить анимацию для блока кольца навыка
function getAnimationSkills(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('progress-ring-block_animation');
        }
    });
}

//Получить анимацию для блока названия навыка
function getAnimationNameSkill(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('progress-name_animation');
        }
    });
}

//Получить анимацию для заголовка в блоке "Портфолио"
function getAnimationTitleCases(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('portfolio-title_animation');
        }
    });
}

//Получить анимацию для Слайдера
function getAnimationCases(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('slider_animation');
        }
    });
}

//Получить анимацию Описания проекта
function getAnimationPortfolio(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('portfolio-base_animation');
        }
    });
}

//Получить анимацию для калькулятора
function getAnimationCalculator(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('calculator_animation');
        }
    });
}

//Получить анимацию для статистики
function getAnimationStatistic(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('statistics_animation');
        }
    });
}

//Получить анимацию для отзывов
function getAnimationReviews(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('reviews_animation');
        }
    });
}

//Получить анимацию для полей ввода формы
function getAnimationFormInput(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('form-field__data_animation');
        }
    });
}


//Получить анимацию для поля сообщения
function getAnimationFormMessage(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('field__message_animation');
        }
    });
}


//Получить анимацию для карты
function getAnimationMap(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('map_animation');
        }
    });
}