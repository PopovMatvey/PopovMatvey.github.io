// Инициализация переменных

const SVG_CIRCLE = document.querySelector('.progress-ring');                    // Кольцо прогресса
const CIRCLE = document.querySelector('.progress-ring__circle');               // Окружность кольца проресса
const MAIN_SVG = document.querySelector('.main-ring');                          // Основное кольцо прогресса        
const MAIN_CIRCLE = document.querySelector('.main-ring_circle');                // Окружность основного кольца проресса
const CIRCLE_PROGRESS_LIST = document.querySelectorAll('.progress-ring__circle');  // Список окружностей кольца прогресса
const CIRCLE_MAIN_LIST = document.querySelectorAll('.main-ring_circle');           // Список окружностей основного кольца


const SVG_MAIN_WIDTH = SVG_CIRCLE.width.baseVal.value;       // Ширина кольца (Возвращение значения стиля "Ширина")


/*Значения основной окружности кольца проресса*/

const COLOR_BORDER_CIRCLE_MAIN = "white";                      // Цвет границы основного кольца                                
const CX_CIRCLE = 100;                                       // Атрибут cx
const CY_CIRCLE = 100;                                       // Атрибут cy
const SIZE_BORDER_CIRCLE = 12;                                 // Размер границы окружности
const COLOR_BORDER_CIRCLE = "#11d436";                        // Цвет границы кольца-прогресса   


/* Задание атрибутов к основному кольцу  */

$.each(CIRCLE_MAIN_LIST, function (index) {
    CIRCLE_MAIN_LIST[index].setAttribute('fill', 'transparent');              // Прозрачный фон у окружности
    CIRCLE_MAIN_LIST[index].setAttribute('stroke', COLOR_BORDER_CIRCLE_MAIN);    // Цвет границы окружности
    const cxMain = CIRCLE_MAIN_LIST[index].setAttribute('cx', CX_CIRCLE);      // Атрибут cx
    const cyMain = CIRCLE_MAIN_LIST[index].setAttribute('cy', CY_CIRCLE);      // Атрибут cy
    CIRCLE_MAIN_LIST[index].setAttribute('stroke-width', SIZE_BORDER_CIRCLE);    // Ширина границы окружности
    const whidthCircleMain = CIRCLE_MAIN_LIST[index].attributes[5].value;
    let svgRadiusMain = (SVG_MAIN_WIDTH / 2) - (whidthCircleMain * 2);      // Радиус окружности
    if (svgRadiusMain<0){
        svgRadiusMain = 76;
    }
    CIRCLE_MAIN_LIST[index].setAttribute('r', svgRadiusMain);
});


/* ProgressBar */
/* Значения кольца прогресса */

const SVG_WIDTH = SVG_CIRCLE.width.baseVal.value;          // Ширина кольца

const SVG_HEIGHT = SVG_CIRCLE.width.baseVal.value;         // Высота кольца


// Заголовок в котором отображается процент
const NUMBER_HTML = document.querySelector("#number_HTML");
const NUMBER_CSS = document.querySelector("#number_CSS");
const NUMBER_JS = document.querySelector("#number_JS");
const NUMBER_BOOTSTRAP = document.querySelector("#number_Bootstrap");
const NUMBER_JQUERY = document.querySelector("#number_Jquery");
const NUMBER_PHP = document.querySelector("#number_PHP");
const NUMBER_SQL = document.querySelector("#number_SQL");
const NUMBER_PYTHON = document.querySelector("#number_Python");
const NUMBER_CSHARP = document.querySelector("#number_CSharp");
const NUMBER_JAVA = document.querySelector("#number_Java");


// Процент заполненности кольца 
const PRECENT_HTML = 96;
const PRECENT_CSS = 94;
const precentJS = 89;
const PRECENT_BOOTSTRAP = 77;
const PRECENT_JQUERY = 73;
const PRECENT_PHP = 83;
const PRECENT_SQL = 87;
const PRECENT_PYTHON = 69;
const PRECENT_CSHARP = 66;
const PRECENT_JAVA = 64;


// Ожидание прогрузки страницы
$(document).ready(function () {

    // Вызов функций
    initProgressBar(0, PRECENT_HTML);
    NUMBER_HTML.innerHTML = PRECENT_HTML;
    initProgressBar(1, PRECENT_CSS);
    NUMBER_CSS.innerHTML = PRECENT_CSS;
    initProgressBar(2, precentJS);
    NUMBER_JS.innerHTML = precentJS;
    initProgressBar(3, PRECENT_BOOTSTRAP);
    NUMBER_BOOTSTRAP.innerHTML = PRECENT_BOOTSTRAP;
    initProgressBar(4, PRECENT_JQUERY);
    NUMBER_JQUERY.innerHTML = PRECENT_JQUERY;
    initProgressBar(5, PRECENT_PHP);
    NUMBER_PHP.innerHTML = PRECENT_PHP;
    initProgressBar(6, PRECENT_SQL);
    NUMBER_SQL.innerHTML = PRECENT_SQL;
    initProgressBar(7, PRECENT_PYTHON);
    NUMBER_PYTHON.innerHTML = PRECENT_PYTHON;
    initProgressBar(8, PRECENT_CSHARP);
    NUMBER_CSHARP.innerHTML = PRECENT_CSHARP;
    initProgressBar(9, PRECENT_JAVA);
    NUMBER_JAVA.innerHTML = PRECENT_JAVA;
});

//Инициализация ProgressBar
function initProgressBar(index, precent) {
    $.each(CIRCLE_PROGRESS_LIST, function () {
        CIRCLE_PROGRESS_LIST[index].setAttribute('fill', 'transparent');                // Прозрачный фон у окружности
        CIRCLE_PROGRESS_LIST[index].setAttribute('stroke', COLOR_BORDER_CIRCLE);        // Цвет границы окружности
        const CX = CIRCLE_PROGRESS_LIST[index].setAttribute('cx', CX_CIRCLE);           // Атрибут cx
        const CY = CIRCLE_PROGRESS_LIST[index].setAttribute('cy', CY_CIRCLE);           // Атрибут cy
        CIRCLE_PROGRESS_LIST[index].setAttribute('stroke-width', SIZE_BORDER_CIRCLE);   // Ширина границы окружности
        const whidthCircle = CIRCLE_PROGRESS_LIST[index].attributes[5].value;
        let SVG_RADIUS = (SVG_WIDTH / 2) - (whidthCircle * 2);                        // Радиус окружности
        if (SVG_RADIUS<0){
            SVG_RADIUS = 76;
        }
        CIRCLE_PROGRESS_LIST[index].setAttribute('r', SVG_RADIUS);
        const CIRCUMFERENCE = 2 * Math.PI * SVG_RADIUS;                                 // Длина окружности
        CIRCLE_PROGRESS_LIST[index].style.strokeDasharray = `${CIRCUMFERENCE}  ${CIRCUMFERENCE}`;
        CIRCLE_PROGRESS_LIST[index].style.strokeDashoffset = CIRCUMFERENCE;
        const OFFSET = CIRCUMFERENCE - precent / 100 * CIRCUMFERENCE;                   // Посчёт отступа при определённом проценте     
        CIRCLE_PROGRESS_LIST[index].style.strokeDashoffset = OFFSET;
    });
}
