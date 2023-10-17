const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const body = document.querySelector('.page__body');
const navItem = document.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--open');
    burger.classList.toggle('burger--open');
    body.classList.toggle('no-scrolle');

})

window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.nav') && !target.closest('.burger')) {
        nav.classList.remove('nav--open');
        burger.classList.remove('burger--open');
        body.classList.remove('no-scrolle');
    }
})

navItem.forEach((item) => item.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    burger.classList.remove('burger--open');
    body.classList.remove('no-scrolle');
}));