const nav = document.querySelector('nav');
const navMid = document.querySelector('.nav-mid');
const navBottom = document.querySelector('.nav-bottom');

window.addEventListener('scroll', (e) => {
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