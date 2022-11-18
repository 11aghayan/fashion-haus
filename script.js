const navBar = document.querySelector(".main-navigation");
const button = document.querySelector(".menu-btn");
const header = document.querySelector(".header-section");
const link = document.querySelectorAll(".nav-item-link");

function click (btn) {
    btn.addEventListener("click", () => {
        const buttonCondition = button.getAttribute("menu");
        const navVisible = document.querySelector(".navbar");
        const navHeight = navVisible.offsetHeight + 60 + "px";
        
            if (buttonCondition === "closed") {
                navBar.setAttribute("mobile-visibility", "true");
                navBar.style.height = navHeight;
                button.setAttribute("menu", "open");
                header.setAttribute("menu", "open");
                navVisible.setAttribute("navbar-visibility", "true");
            } else {
                navBar.setAttribute("mobile-visibility", "false");
                navBar.style.height = 0;
                button.setAttribute("menu", "closed");
                header.setAttribute("menu", "closed");
                navVisible.setAttribute("navbar-visibility", "false");
            }
        }

    );
};

click(button);
link.forEach((i) => {
    click(i);
});



const toggler = document.querySelectorAll(".toggler");
const pPart = document.querySelectorAll(".news-p-part");



toggler.forEach((x, i) => {
    x.addEventListener("click", () => {
        const togglerCondition = x.getAttribute("condition");

        if (togglerCondition === "closed") {
            x.setAttribute("condition", "open");
            pPart[i].setAttribute("visibility", "true");
        } else {
            x.setAttribute("condition", "closed");
            pPart[i].setAttribute("visibility", "false");
        }
    })
});

