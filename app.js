const navShow = document.querySelector('.hiddenNav');
const hamburgerMenu = document.querySelector('.mobileMenu');

hamburgerMenu.addEventListener('click', function handleClick(event) {
    event.target.classList.toggle('open');
    event.target.classlist.toggle('showMenu');
});

hamburgerMenu.addEventListener('click', () => {
    navShow.classList.toggle('show');
})