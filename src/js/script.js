// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         adaptiveHeight: true,
//         speed: 1200,
//         prevArrow:  `<button type="button" class="slick-prev"><img src="img/icons/left-arrow.svg"></button>`,
//         nextArrow: `<button type="button" class="slick-next"><img src="img/icons/rigth-arrow.svg"></button>`,
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     arrows: false,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 768,
//                 settings: {
//                     arrows: false,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 576,
//                 settings: {
//                     arrows: false,
//                     dots: true,
//                     slidesToShow: 3,
//                     slidesToScroll: 1
//                 }
//             },
//         ]
//     });
// });

// СЛАЙДЕР ===========================
const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', function() {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function() {
    slider.goTo('next');
});



// ТАБЫ ===========================

$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});

function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
    
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        });
    });
}

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');
