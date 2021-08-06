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

