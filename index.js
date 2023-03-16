
const menuBtn = document.querySelector('.menu-icon');
const navBar = document.querySelector('.nav-bar');
const close_btn = document.querySelector('.close-menu-icon');
const close_lightbox = document.querySelector('.close');

menuBtn.addEventListener('click', function () {
	navBar.classList.toggle('open');
  });
  close_btn.addEventListener('click', function () {
	  navBar.classList.toggle('open');
  });