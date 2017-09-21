$(document).ready(function() {
    $("[rel='tooltip']").tooltip();    

    $('.about').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000);
    });

    $('.techStack').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#techStack").offset().top
        }, 1000);
    });

    $('.portfolio').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });

    $('.contact-me').on('click', function () {
        $('html, body').animate({
            scrollTop: $("#contact-me").offset().top
        }, 1000);
    });

    

});
