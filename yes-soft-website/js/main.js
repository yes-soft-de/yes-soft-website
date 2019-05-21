$('.project-carousal').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});
$('.service-carousal').slick({
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                centerMode: true,
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});

function ideaOpacity () {

}
setInterval( function () {
    const active = $('#ideas li.active');
    if ( active.is(':last-child') ) {
        $('#ideas li').eq(0).addClass('active');
    } else {
        active.next().addClass('active');
    }
    active.removeClass('active');
}, 2300 );

function navbar () {
    const nav = $('.navbar');
    if ($(window).scrollTop() >= 100) {
        nav.addClass('border-bottom')
    } else {
        nav.removeClass('border-bottom')
    }
}
$(window).ready(navbar);
$(window).scroll(navbar);
