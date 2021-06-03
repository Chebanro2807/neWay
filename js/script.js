const swiper = new Swiper('.tour-section .swiper-container', {
    loop: true,
    slidesPerView:1,
    spaceBetween: 30,
    centeredSlider:true,
    breakpoints:{
        640:{
            slidesPerView:1,
            spaceBetween: 10,
        },
        768:{
            slidesPerView:2,
            spaceBetween: 20,
        },
        1024:{
            slidesPerView:4,
            spaceBetween: 30,
        },
    }
});

const swiper2 = new Swiper('.testimonials-section .swiper-container', {
    loop: true,
});