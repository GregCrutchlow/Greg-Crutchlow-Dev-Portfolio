const portfolio = {};
const darkMode = document.querySelector("darkBtn");

portfolio.navBarToggle = () => {
    const navBar = document.querySelector(".navBar");

    window.addEventListener('scroll', function () {
        if (this.window.scrollY > navBar.clientHeight + 200) {
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

portfolio.profilePic = () => {
    const profile = document.querySelector(".headerProfilePic")

    profile.addEventListener("click", () => {
        profile.classList.toggle("egg")
    })
}

portfolio.darkMode = () => {
    // const detect = window.matchMedia("(prefers-color-scheme: dark)")
    const darkBtn = document.querySelector(".darkBtn");
    const body = document.querySelector("main");
    const header = document.querySelector("header")
    const contact = document.querySelector("#contact")
    const footer = document.querySelector("footer")
    const nav = document.querySelector(".navBar")
    const tech = document.querySelector("#skills")

    // console.log(detect);

    darkBtn.addEventListener("click", () => {
        body.classList.toggle("darkMode");
        header.classList.toggle("headerDarkMode");
        footer.classList.toggle("darkMode");
        contact.classList.toggle("contactDarkMode");
        nav.classList.toggle("navBarDarkMode");
        tech.classList.toggle("techDarkMode");
	})
}

portfolio.init = () => {
    portfolio.navBarToggle();
    portfolio.hamburgerMenu();
    portfolio.profilePic();
    portfolio.darkMode();
}

portfolio.init();