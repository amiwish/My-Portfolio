let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-btn');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

// 1. Mobile Menu Toggle
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
};

// 2. Scroll Logic
window.onscroll = () => {
    // Menu band karna jab scroll ho
    navbar.classList.remove('active');

    // Scroll hone par 'Active Link' highlight karna
    sections.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

var typed = new Typed(".typing-text", {
    strings: ["Frontend Developer", "Web Designer", "C++ Programmer", "React Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});



document.querySelector('form').onsubmit = (e) => {
    e.preventDefault(); // Page refresh hone se rokega
    alert("Thank you! Your message has been sent successfully.");
};