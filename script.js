const navBar = document.querySelector(".main-navigation");
const button = document.querySelector(".menu-btn");
const header = document.querySelector(".header-section");

button.addEventListener("click", () => {
        const buttonCondition = button.getAttribute("menu");
        
        if (buttonCondition === "closed") {
            navBar.setAttribute("mobile-visibility", "true");
            button.setAttribute("menu", "open");
            header.setAttribute("menu", "open");
        } else {
            navBar.setAttribute("mobile-visibility", "false");
            button.setAttribute("menu", "closed");
            header.setAttribute("menu", "closed");
        }
    }
);