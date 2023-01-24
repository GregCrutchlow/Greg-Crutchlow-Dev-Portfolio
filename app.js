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

portfolio.hamburgerMenu = () => {
    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".navMenu")

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    })

    document.querySelectorAll(".navLink" && ".navItem").forEach((n) =>
        n.addEventListener("click", () => {
            hamburger.classList.remove("active")
            navMenu.classList.remove("active")
        })
    )

    window.addEventListener('click', function () {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    })

    hamburger.addEventListener("click", function (e) {
		e.stopPropagation()
	})

	navMenu.addEventListener("click", function (e) {
		e.stopPropagation()
	})
}
// portfolio.projects = [
//     {

//     }
// ]

portfolio.init = () => {
    portfolio.navBarToggle();
    portfolio.hamburgerMenu();
}

portfolio.init();