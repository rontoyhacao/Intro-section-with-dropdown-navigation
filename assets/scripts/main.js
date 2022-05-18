const hamburgerBtn = document.querySelectorAll(`.btn`);
const mobileNavBar = document.querySelector(`.nav-container`);
const modalBg = document.querySelector(`.modal-bg`);

hamburgerBtn.forEach((el) => {
  el.addEventListener(`click`, () => {
    mobileNavBar.classList.toggle(`open`);
    modalBg.classList.toggle(`open`);
    document.querySelector(`body`).classList.toggle(`disable-scroll`);
  });
});
