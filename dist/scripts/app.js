document.addEventListener('DOMContentLoaded', function () {
    new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: true,
        interval: 2000,
        pauseOnHover: true,
        breakpoints: {
            920: {
                perPage: 2,
            },
            769:{
                perPage: 1
            }
        }
    } ).mount();
  }, false);

  document.querySelector('.button--hamburger').addEventListener('click', e => {
    toggleSidebar();
  });

  document.querySelector('.button--close').addEventListener('click', e => {
    toggleSidebar();
  });

  
window.addEventListener('scroll', (e) => {
  const nav = document.querySelector('nav');
  const navMid = document.querySelector('.nav-mid');
  const navBottom = document.querySelector('.nav-bottom');

  if(window.scrollY > 25){
      nav.classList.add('sticky');
      if(window.innerWidth > 1040){
          navMid.classList.add('nav-mid--compact');
          navBottom.classList.add('hide');
      }
  } else {
      nav.classList.remove('sticky');
      navMid.classList.remove('nav-mid--compact');
      navBottom.classList.remove('hide');
  }
});

  const toggleSidebar = function () { 
    const bodyEl = document.querySelector('body');

    document.querySelector('.sidebar').classList.toggle('sidebar--show');
    document.querySelector('.sidebar-overlay').classList.toggle('sidebar-overlay--hide');
    bodyEl.style.position = bodyEl.style.position === 'sticky' ? 'static' : 'sticky';
    bodyEl.style.overflow = bodyEl.style.overflow === 'hidden' ? 'auto' : 'hidden';
  }