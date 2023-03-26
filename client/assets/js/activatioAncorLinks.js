$(document).ready(function () {

    // активность элемента в navbar
    $(window).scroll(() => {
        let scroleDistance = $(window).scrollTop();
        $(".selection").each((i, el) => {
            if ($(el).offset().top - $("nav").outerHeight() <= scroleDistance + 100) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });
                $("nav li:eq(" + i + ")").find('a').addClass('active');
            }

            if ($(el).offset().top - $(".dropdown-menu").outerHeight() <= scroleDistance) {
                $('.dropdown-menu ').each((i, el) => {
                    if ($(el).hasClass('active ')) {
                        $(el).removeClass('active');
                    }
                });
                $(".dropdown-menu li:eq(" + i + ")").find('a').addClass('active');
            }
        });
    });
});

//плавная прокрутка
$("a[href^='#']").click(function () {
    let valHerf = $(this).attr("href");
    if (valHerf != "#") {
        $('html, body').animate({ scrollTop: $(valHerf).offset().top - 50 + "px" })
    }
});