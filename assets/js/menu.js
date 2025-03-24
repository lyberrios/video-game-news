document.addEventListener("DOMContentLoaded", (event) => {

    let mobileBtn = document.querySelector(".navbar__mobile--btn");
    let mobileMenu = document.querySelector(".navbar__mobile");

    mobileBtn.addEventListener("click", () => {  
        let menuOpen = document.querySelector(".menuOpen");
        
        if (!menuOpen) {
            mobileMenu.style.display = "block";
            mobileMenu.classList.add("menuOpen");
        }else{
            mobileMenu.style.display = "none";
            mobileMenu.classList.remove("menuOpen");
        }
    });

});