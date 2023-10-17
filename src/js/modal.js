const button = document.querySelector(".form__button");
const modal = document.querySelector(".modal");

const phone = document.querySelector(".form__input--phone");
const email = document.querySelector(".form__input--email");
const checkbox = document.querySelector(".checkbox__input");
const modalOpen = document.querySelector(".modal--open");

const Keys = { ESCAPE: 'Escape', ESC: 'Esc' };


button.addEventListener('click', function (e) {
    if (phone.validity.valid && email.validity.valid && checkbox.validity.valid) {
        e.preventDefault();
        modal.classList.add("modal--open");
    }
});

modal.addEventListener('click', function () {
    modal.classList.remove('modal--open');
});

window.addEventListener('keydown', (e) => {

    if (e.key === Keys.ESCAPE || e.key === Keys.ESC) {
        modal.classList.remove('modal--open');
    }

});

