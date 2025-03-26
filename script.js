// Funcion alternar barra lateral
const menu = document.querySelector(".menu");
const overlaySidebar = document.querySelector(".bg-overlay");
const barraLateral = document.querySelector(".barra-lateral");

function alternarBarraLateral() {
    barraLateral.classList.toggle("max-barra-lateral");
    overlaySidebar.classList.toggle("expandido");
    
    if (barraLateral.classList.contains("max-barra-lateral")) {
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    } else {
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    };
};
menu.addEventListener("click", alternarBarraLateral);
overlaySidebar.addEventListener("click", alternarBarraLateral);

// Funcion switch modo oscuro
const darkModeSwitch = document.querySelector(".base");

darkModeSwitch.addEventListener("click", () => {
    let body = document.body;
    let circuloDM = document.querySelector(".circulo");
    
    body.classList.toggle("dark-mode");
    circuloDM.classList.toggle("prendido");
});

// Funcion de seccion seleccionada
const enlaces = document.querySelectorAll(".barra-lateral .navegacion a");

enlaces.forEach(enlace => {
    
    enlace.addEventListener("click", () => {
        enlaces.forEach(e => 
            e.classList.remove("select-menu")
        );
        enlace.classList.add("select-menu");
    });
});

// Funcion barra mini bara lateral
const logoSidebar = document.getElementById("logoSidebar");
const iconDarkMode = document.querySelector(".barra-lateral .modo-oscuro ion-icon");
const main = document.querySelector(".content-web");
const spans = document.querySelectorAll(".bLateral span");

function cerrarBarraLateral() {
    barraLateral.classList.toggle("mini-barra-lateral");
    iconDarkMode.classList.toggle("cerrado");
    main.classList.toggle("min-main")
    spans.forEach((span) => {
        span.classList.toggle("oculto");
    });
};
logoSidebar.addEventListener("click", cerrarBarraLateral);

// Funcion barra lateral responsiva
let titlePage = document.querySelector(".nombre-pagina");

function ajustarInterfaz() {
    if (window.innerWidth <= 900) {
        barraLateral.classList.remove("mini-barra-lateral");
        iconDarkMode.classList.remove("cerrado");
        main.classList.remove("min-main");
        spans.forEach(span => span.classList.remove("oculto"));
        
        titlePage.style.display = "flex";
    } else {
        barraLateral.classList.add("mini-barra-lateral");
        iconDarkMode.classList.add("cerrado");
        main.classList.add("min-main");
        spans.forEach(span => span.classList.add("oculto"));

        titlePage.style.display = "none";
    }

    if (window.innerWidth >= 600) {
        barraLateral.classList.add("mini-barra-lateral");
        iconDarkMode.classList.add("cerrado");
        main.classList.add("min-main");
        spans.forEach(span => span.classList.add("oculto"));
        
        titlePage.style.display = "flex";
    }
};
document.addEventListener("DOMContentLoaded", ajustarInterfaz);
window.addEventListener("resize", ajustarInterfaz);