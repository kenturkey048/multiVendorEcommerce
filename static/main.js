
const hamburgerIcon = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');


navClose.addEventListener('click', () => {
    navMenu.classList.add('hidden')
})


hamburgerIcon.addEventListener('click', () => {
    navMenu.classList.remove('hidden')
})