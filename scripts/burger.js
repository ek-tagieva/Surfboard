const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.site-nav');
const body = document.querySelector('body');


burger.addEventListener('click', () => {
    navMenu.classList.toggle('site-nav--active');
    if (navMenu.getAttribute('class').includes('site-nav--active')) {
        burger.classList.add('burger--close');
        burger.classList.remove('burger--open');
        body.style.overflow = "hidden";
    } else {
        burger.classList.add('burger--open')
        burger.classList.remove('burger--close')
        body.style.overflow = "auto";
    }
})

// burger.addEventListener('click', () => {
//     navMenu.classList.toggle('site-nav--active')
//     if (navMenu.getAttribute('class') === 'header__nav site-nav site-nav--active') {
//         burger.classList.add('burger--close')
//         burger.classList.remove('burger--open')
//     } else {
//         burger.classList.add('burger--open')
//         burger.classList.remove('burger--close')
//     }
// })


