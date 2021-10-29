import './_snowpack/pkg/bootstrap.js';

const header = document.querySelector('.header');
const navToggle = document.querySelector('.nav-toggle');

const headerNav = document.querySelector('.header__nav');



navToggle.addEventListener('click', function () {
    headerNav.classList.toggle('header__nav--entered');
    navToggle.classList.toggle('nav-toggle--entered');
});


const links = document.querySelectorAll(".section-link");

for (const link of links) {
    link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    if (innerWidth <= 992) {
        headerNav.classList.remove('header__nav--entered');
        navToggle.classList.remove('nav-toggle--entered');
    }

    scroll({
        top: offsetTop - 70,
        behavior: "smooth"
    });
}