// functionality for the mobile menu responsive view
let menuBtn = document.getElementsByClassName('menu-btn');

let xBtn = document.getElementsByClassName('x-btn');

let mobileMenu = document.getElementsByClassName('mobile-menu');
let mobileMenu2 = document.getElementsByClassName('mobile-menu2');

let activeMenu = document.getElementsByClassName('active');

let clickedBtn = function () {
	mobileMenu[0].classList.toggle('active');
	mobileMenu2[0].classList.toggle('active');
};

menuBtn[0].addEventListener('click', clickedBtn);

// mobileMenu[0].addEventListener('click', clickedBtn);

xBtn[0].addEventListener('click', clickedBtn);
xBtn[1].addEventListener('click', clickedBtn);
