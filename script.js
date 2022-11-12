const navBar = document.querySelector(".main-navigation");
const button = document.querySelector(".menu-btn");
let buttonCondition = button.getAttribute("menu");

button.addEventListener("click", () => {
        if (buttonCondition === "closed") {
            navBar.setAttribute("mobile-visibility", "true");
            button.setAttribute("menu", "open");
        } else {
            navBar.setAttribute("mobile-visibility", "false");
            button.setAttribute("menu", "closed");
        }
    }
);