const navShow = document.querySelector('.hiddenNav');
const hamburgerMenu = document.querySelector('.mobileMenu');
const headerPic = document.querySelector('.headerImg')

const icon = document.getElementById('icon');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
const nav = document.getElementById('nav');

icon.addEventListener('click', () => {
    bar1.classList.toggle('bar1')
    bar2.classList.toggle('bar2')
    bar3.classList.toggle('bar3')
    nav.classList.toggle('show')
    icon.classList.toggle('open')
})

