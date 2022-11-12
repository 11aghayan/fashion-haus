const navBar = document.querySelector(".main-navigation");
const button = document.querySelector(".menu-btn");
let buttonCondition = button.getAttribute("menu-toggler");

button.addEventListener("click", () => {
        if (buttonCondition === "closed") {
            navBar.setAttribute("mobile-visibility", "true");
            button.setAttribute("menu-toggler", "open");
        } else if (buttonCondition === "open") {
            navBar.setAttribute("mobile-visibility", "false");
            button.setAttribute("menu-toggler", "closed");
        }
    }
);