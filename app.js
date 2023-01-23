const portfolio = {};

portfolio.navBarToggle = () => {
    const navBar = document.querySelector(".navBar");

    window.addEventListener('scroll', function () {
        if (this.window.scrollY > navBar.clientHeight + 750) {
            navBar.classList.add('scrolled')
        } else {
            navBar.classList.remove('scrolled')
        }
    })
}

portfolio.init = () => {
    portfolio.navBarToggle();
}

portfolio.init();