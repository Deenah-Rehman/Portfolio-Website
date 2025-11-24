let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onload = function () {
    const contactForm = document.querySelector(".contact form");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent!");
    });
};
