// Carrosel - Código de funcionamento

var swiper = new Swiper(".slide-content", {
    slidesPerView: "auto",
    spaceBetween: 30,
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 7340999999999,
        disableOnInteraction: false
    }, 

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        
        660: {
            slidesPerView: 'auto',
        },

        950: {
            slidesPerView: 'auto',
        }
    }

  });