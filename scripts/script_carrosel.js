// Carrosel - Código de funcionamento
/*
var swiper = new Swiper(".slide-content", {
    slidesPerView: "3",
    spaceBetween: 25,
    rewind: true,
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

  });*/

  
    var swiper = new Swiper(".slide-content", {
      slidesPerView: 3,
      spaceBetween: 30,
      rewind: true,
      pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        800: {
            slidesPerView: '2',
        },
        
        900: {
            slidesPerView: '3',
        },

    }
     
    });
    