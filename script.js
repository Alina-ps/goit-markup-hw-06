const mobMenu = document.querySelector('.mob-menu');
const openMobMenuBtn = document.querySelector('.menu-open-btn');
const closeMobMenuBtn = document.querySelector('.menu-close-btn');

const openMobileMenu = () => {
  mobMenu.classList.add('is-open');
};

const closeMobileMenu = () => {
  mobMenu.classList.remove('is-open');
};

openMobMenuBtn.addEventListener('click', openMobileMenu);
closeMobMenuBtn.addEventListener('click', closeMobileMenu);

const backdrop = document.querySelector('.backdrop');
const backdropOpenButton = document.querySelector('.page-button');
const backdropCloseButton = document.querySelector('.modal-close-btn');

const openBackdrop = () => {
  backdrop.classList.add('is-open');
};

const closeBackdrop = () => {
  backdrop.classList.remove('is-open');
};

backdropOpenButton.addEventListener('click', openBackdrop);
backdropCloseButton.addEventListener('click', closeBackdrop);
