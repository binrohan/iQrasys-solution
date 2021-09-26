document.addEventListener('DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: false,
        interval: 10,
        pauseOnHover: true,
        breakpoints: {
            920: {
                perPage: 2,
            },
            768:{
                perPage: 1
            }
        }
    } ).mount();
  }, false);