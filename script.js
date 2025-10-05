// =============================
// MENU TOGGLE FUNCTIONALITY
// =============================
document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
});

// =============================
// SECTION SCROLL ANIMATION & FOOTER ANIMATION
// =============================
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar link highlight
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // show section animation
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // make header sticky after scroll
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // close navbar when scrolling
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // =============================
    // FOOTER ANIMATION ON SCROLL
    // =============================
    let footer = document.querySelector('.footer');
    let scrollPosition = window.scrollY + window.innerHeight;
    let pageHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= pageHeight - 100) { // triggers when near bottom
        footer.classList.add('show-animate');
    } else {
        footer.classList.remove('show-animate');
    }
};
