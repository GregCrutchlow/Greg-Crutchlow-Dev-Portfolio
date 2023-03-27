const portfolio = {};
const darkMode = document.querySelector("darkBtn");

portfolio.navBarToggle = () => {
    const navBar = document.querySelector(".navBar");
    const header = document.querySelector("header");

    window.addEventListener('scroll', function () {
        if (this.window.scrollY > navBar.clientHeight + 200) {
			navBar.classList.add("scrolled")
		} else {
			navBar.classList.remove("scrolled")
		}
    }) || window.addEventListener('scroll', function () {
        if (header.classList.contains("headerDarkMode") && (this.window.scrollY > navBar.clientHeight + 200)) {
            navBar.classList.add("scrolledDark")
        } else {
            navBar.classList.remove("scrolledDark")
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
		e.stopPropagation();
	})

	navMenu.addEventListener("click", function (e) {
        e.stopPropagation()
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
    const about = document.querySelector(".about")
    const typo = document.querySelector("html")
    const project = document.querySelector("#projects")

    // console.log(detect);

    darkBtn.addEventListener("click", () => {
        if (darkBtn.innerHTML === "Dark Mode") {
            darkBtn.innerHTML = "Light Mode"
        } else {
            darkBtn.innerHTML = "Dark Mode"
        }
        body.classList.toggle("darkMode");
        header.classList.toggle("headerDarkMode");
        footer.classList.toggle("darkMode");
        contact.classList.toggle("contactDarkMode");
        nav.classList.toggle("navBarDarkMode");
        tech.classList.toggle("techDarkMode");
        about.classList.toggle("aboutDark")
        typo.classList.toggle("darkTypo")
        project.classList.toggle("darkProjects")
	})
}

portfolio.modal = () => {
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    const btnContact = document.querySelector('.btnContact');
    const btnCloseModal = document.querySelector('.close-modal');

    const modalPop = () => {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    }

    setTimeout(modalPop, 10000);

    const closeModal = () => {
        modal.classList.add('hidden');
		overlay.classList.add('hidden');
    }

    // These close the modal based on either: the button to go to contact, the close button or anywhere on the screen outside of modal or the escape key
    btnContact.addEventListener('click', closeModal);
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal)

    document.addEventListener('keydown', (e) => {
        console.log(e);
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeModal();
        }
    })
}

portfolio.init = () => {
    portfolio.navBarToggle();
    portfolio.hamburgerMenu();
    portfolio.darkMode();
    portfolio.modal();
}

portfolio.init();
