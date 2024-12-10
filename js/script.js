const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('header nav ul');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
