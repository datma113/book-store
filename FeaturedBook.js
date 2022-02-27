let featuredBookTab = document.getElementsByClassName("featured-book-header-content-text");
let featuredBookMegaMenu = document.getElementsByClassName("featured-book-mega-menu");
    featuredBookMegaMenu[0].style.display = "block";

for (let i = 0; i < featuredBookTab.length; i++) {
    (function () {
        featuredBookTab[i].addEventListener("click", () =>{
            for(let j = 0; j < featuredBookTab.length ; j++){
                featuredBookTab[j].style.opacity = 0.7;
                featuredBookTab[j].style.border = "none";
                featuredBookMegaMenu[j].style.display = "none";
            }
            featuredBookTab[i].style.opacity = 1;
            featuredBookTab[i].style.borderBottom = 1 + "px "+"solid "+"black";
            featuredBookMegaMenu[i].style.display = "block";
        },false);
    }()); // immediate invocation
}

