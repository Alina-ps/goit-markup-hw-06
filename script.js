// Elements
const mobMenu = document.querySelector('.mob-menu');
const openMobMenuBtn = document.querySelector('.menu-open-btn');
const closeMobMenuBtn = document.querySelector('.menu-close-btn');

const navLinks = document.querySelectorAll('.link');

const backdrop = document.querySelector('.backdrop');
const openBackdropBtn = document.querySelector('.page-button');
const closeBackdropBtn = document.querySelector('.modal-close-btn');
const backdropForm = document.querySelector('.modal-form');

const subscribeForm = document.querySelector('.subscr-form');
const subscribeButton = document.querySelector('.subscr-btn');

//  Mobile Menu Open/Close
const openMobileMenu = () => {
  mobMenu.classList.add('is-open');
};

const closeMobileMenu = () => {
  mobMenu.classList.remove('is-open');
};

openMobMenuBtn.addEventListener('click', openMobileMenu);
closeMobMenuBtn.addEventListener('click', closeMobileMenu);

// Navigation To Sections
const goToSection = e => {
  closeMobileMenu();
  const targetId = e.target.getAttribute('href').substring(1);
  const targetSection = document.getElementById(targetId);
};

navLinks.forEach(link => {
  link.addEventListener('click', goToSection);
});

// Backdrop Open/Close
const openBackdrop = () => {
  backdrop.classList.add('is-open');
};

const closeBackdrop = () => {
  backdrop.classList.remove('is-open');
};

openBackdropBtn.addEventListener('click', openBackdrop);
closeBackdropBtn.addEventListener('click', closeBackdrop);

// Backdrop Form Submission Handler
const sendContacts = e => {
  e.preventDefault();

  const userName = document.getElementById('user-name').value;
  const userPhone = document.getElementById('user-tel').value;
  const userEmail = document.getElementById('user-email').value;
  const userComment = document.getElementById('user-comment').value;

  console.log(
    `Name: ${userName}, Phone: ${userPhone}, Email: ${userEmail}, Comment: ${userComment}`
  );

  backdropForm.reset();
};

backdropForm.addEventListener('submit', sendContacts);

// Subscription Form Submission Handler
const subscribeUser = e => {
  e.preventDefault();

  const email = subscribeForm.querySelector('.subscr-input').value;
  console.log(`Subscribed email: ${email}`);

  subscribeForm.reset();
};

subscribeForm.addEventListener('submit', subscribeUser);
