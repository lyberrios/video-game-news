document.addEventListener("DOMContentLoaded", (event) => {

    let mobileBtn = document.querySelector(".navbar__mobile--btn");
    let mobileMenu = document.querySelector(".navbar__mobile");

    mobileBtn.addEventListener("click", () => {
        let menuOpen = document.querySelector(".menuOpen");

        if (!menuOpen) {
            mobileMenu.style.display = "block";
            mobileMenu.classList.add("menuOpen");
        } else {
            mobileMenu.style.display = "none";
            mobileMenu.classList.remove("menuOpen");
        }
    });
    const submenu = (button, submenu, className) => {
        button.addEventListener("click", () => {
            let drop = document.querySelector("." + className);
            if (!drop) {
                submenu.style.display = "block";
                submenu.classList.add(className);
            } else {
                submenu.style.display = "none";
                submenu.classList.remove(className);
            }
        })
    }
    //Primer submenu
    let dropdown1Btn = document.querySelector("#icon-1");
    let dropdown1Submenu = document.querySelector("#submenu1");
    //Segundo submenu
    let dropdown2Btn = document.querySelector("#icon-2");
    let dropdown2Submenu = document.querySelector("#submenu2");
    //Ejecutar funcionalidad
    submenu(dropdown1Btn, dropdown1Submenu, "drop1");
    submenu(dropdown2Btn, dropdown2Submenu, "drop2");

    // Resized - redimensionado
    window.addEventListener("resize", () => {
        let window = parseFloat(document.body.clientWidth);
        if (window > 1024) {
            mobileMenu.style.display = "none";
            mobileMenu.classList.remove("menuOpen");
        }
}
    );
});