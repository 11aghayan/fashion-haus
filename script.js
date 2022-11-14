const navBar = document.querySelector(".main-navigation");
const button = document.querySelector(".menu-btn");
const header = document.querySelector(".header-section");



button.addEventListener("click", () => {
            const buttonCondition = button.getAttribute("menu");
            const navVisible = document.querySelector(".navbar");
  
            async function navSummon () {        
                if (navVisible.getAttribute("navbar-visibility") === "false") {
                    await openMenu();
                    
                    navVisible.setAttribute("navbar-visibility", "true");
                } else {
                    navVisible.setAttribute("navbar-visibility", "false");
                }
            }

            async function openMenu () {
            if (buttonCondition === "closed") {
                navBar.setAttribute("mobile-visibility", "true");
                button.setAttribute("menu", "open");
                header.setAttribute("menu", "open");

                return new Promise((resolve) => {
                    setTimeout(() => {
                        resolve(openMenu);
                    }, 500);
    
                })
            } else {
                navBar.setAttribute("mobile-visibility", "false");
                button.setAttribute("menu", "closed");
                header.setAttribute("menu", "closed");
            }
        }

        openMenu();
        navSummon();
    }
    
);

const toggler = document.querySelector(".toggler");
const pPart = document.querySelector(".news-p-part");

toggler.addEventListener("click", () => {
    const togglerCondition = toggler.getAttribute("condition");

    if (togglerCondition === "closed") {
        toggler.setAttribute("condition", "open");
        pPart.setAttribute("visibility", "true");
    } else {
        toggler.setAttribute("condition", "closed");
        pPart.setAttribute("visibility", "false");
    }
})