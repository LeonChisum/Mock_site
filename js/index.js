// functionality for the mobile menu responsive view
let menuBtn = document.getElementsByClassName('menu-btn');

let mobileMenu = document.getElementsByClassName('mobile-menu');

let activeMenu = document.getElementsByClassName('active');

let clickedBtn = function () {
	mobileMenu[0].classList.toggle('active');
};
menuBtn[0].addEventListener('click', clickedBtn);

mobileMenu[0].addEventListener('click', clickedBtn);
