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

// portfolio.easterEgg = () => {
//     const profilePic = document.querySelector(".headerImg");

//     profilePic.addEventListener('click', function () {
//         if (profilePic.)
//     })
// }

portfolio.init = () => {
    portfolio.navBarToggle();
}

portfolio.init();