// Get the hamburger and nav menu elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Toggle the nav menu visibility when hamburger is clicked
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    navMenu.classList.toggle('hidden');
});
