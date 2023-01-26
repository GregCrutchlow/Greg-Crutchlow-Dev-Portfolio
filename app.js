const portfolio = {};
const darkMode = document.querySelector("darkBtn");
const navBar = document.querySelector(".navBar")
const header = document.querySelector("header")

// For nav bar background pop in based on what area you've scrolled to
portfolio.observer = () => {

    function navCallback(entries) {
        navBar.classList.toggle("scrolled", !entries[0].isIntersecting)
        if (header.classList.contains("headerDarkMode")) {
            navBar.classList.toggle("scrolledDark")
        }

    }

    const navOptions = {
        threshold: .25,
    }

    const navObs = new IntersectionObserver(navCallback, navOptions)

    navObs.observe(header)
    })
}

// mobile hamburger menu controls
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
		e.stopPropagation();
	})

	navMenu.addEventListener("click", function (e) {
        e.stopPropagation()
	})
}

// simple easter egg to spin header profil picture
portfolio.profilePic = () => {
    const profile = document.querySelector(".headerProfilePic")

    profile.addEventListener("click", () => {
        profile.classList.toggle("egg")
    })
}

// dark mode toggle, need to refine
portfolio.darkMode = () => {
    // const detect = window.matchMedia("(prefers-color-scheme: dark)")
    const darkBtn = document.querySelector(".darkBtn");
    const body = document.querySelector("main");
    const header = document.querySelector("header")
    const contact = document.querySelector("#contact")
    const footer = document.querySelector("footer")
    const nav = document.querySelector(".navBar")
    const tech = document.querySelector("#skills")
    const about = document.querySelector(".about")
    const typo = document.querySelector("html")
    const project = document.querySelector("#projects")

    darkBtn.addEventListener("click", () => {
        if (darkBtn.innerHTML === "Dark Mode") {
            darkBtn.innerHTML = "Light Mode"
        } else {
            darkBtn.innerHTML = "Dark Mode"
        }
        body.classList.toggle("darkMode");
        header.classList.toggle("headerDarkMode");
        footer.classList.toggle("footerDarkMode");
        contact.classList.toggle("contactDarkMode");
        nav.classList.toggle("navBarDarkMode");
        tech.classList.toggle("techDarkMode");
        about.classList.toggle("aboutDark")
        typo.classList.toggle("darkTypo")
        project.classList.toggle("darkProjects")
	})
}

// this adds in all functions to be called when portfolio is called
portfolio.init = () => {
    portfolio.observer();
    portfolio.hamburgerMenu();
    portfolio.profilePic();
    portfolio.darkMode();
}

// this initializes all functions within portfolio function
portfolio.init();

