// NavList
const navSlide = () => {
    const burger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-list-box');
    const navLinks = document.querySelectorAll('.list-item');

    burger.addEventListener('click',() => {
        // Toggle Nav
        nav.toggleAttribute('active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.7s ease forwards ${index / 7}s`
            }
        });
        // Burger Animation
        burger.toggleAttribute('hamburger-active');
    });
}

navSlide();

// If menu (on mobile) is active, on click elsewhere than menu content, close menu
