const burgerMenu = document.querySelector('#burger-menu');
const navMenu = document.querySelector('#nav-menu');
const navLinks = document.querySelectorAll('#nav-menu a');

burgerMenu.addEventListener('click', () => navMenu.classList.toggle('right-0'));

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(navLink => navLink.classList.remove('after:scale-x-100'));
        this.classList.add('after:scale-x-100');
    })
});

navLinks[0].classList.add('after:scale-x-100');