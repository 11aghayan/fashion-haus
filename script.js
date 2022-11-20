const navBar = document.querySelector(".main-navigation");
const button = document.querySelector(".menu-btn");
const header = document.querySelector(".header-section");
const link = document.querySelectorAll(".nav-link");
const mediaQuery = window.matchMedia("(max-width: 1279px)");


button.addEventListener("click", () => {
        const buttonCondition = button.getAttribute("menu");
        const navVisible = document.querySelector(".navbar");
    
        if (buttonCondition === "closed") {
            navBar.setAttribute("mobile-visibility", "true");
            button.setAttribute("menu", "open");
            header.setAttribute("menu", "open");
            navVisible.setAttribute("navbar-visibility", "true");
            navBar.style.height = navVisible.offsetHeight + 60 + "px";
        } else {
            navBar.setAttribute("mobile-visibility", "false");
            button.setAttribute("menu", "closed");
            header.setAttribute("menu", "closed");
            navVisible.setAttribute("navbar-visibility", "false");
            navBar.style.height = 0;
        }
    }
);



link.forEach((i) => {
    i.addEventListener("click", () => {
        if (mediaQuery.matches) {
            const navVisible = document.querySelector(".navbar");

            navBar.setAttribute("mobile-visibility", "false");
            button.setAttribute("menu", "closed");
            header.setAttribute("menu", "closed");
            navVisible.setAttribute("navbar-visibility", "false");
            navBar.style.height = 0;
        }
    });
}); 



const toggler = document.querySelectorAll(".toggler");
const pPart = document.querySelectorAll(".news-p-part");



toggler.forEach((x, i) => {
    x.addEventListener("click", () => {
        const togglerCondition = x.getAttribute("condition");
        
        if (togglerCondition === "closed") {
            x.setAttribute("condition", "open");
            pPart[i].setAttribute("visibility", "true");
            const paragraphHeight = document.querySelectorAll(".news-paragraph");
            const learnMoreHeight = document.querySelector(".news-learn-more");
            pPart[i].style.height = paragraphHeight[i].offsetHeight + learnMoreHeight.offsetHeight + 12 +"px";
            console.log(paragraphHeight[i].offsetHeight);
        } else {
            x.setAttribute("condition", "closed");
            pPart[i].setAttribute("visibility", "false");
            pPart[i].style.height = 0;
        }
    })
});