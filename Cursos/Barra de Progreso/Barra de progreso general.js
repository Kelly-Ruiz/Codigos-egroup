//ESTE SOLO MANIPUTA LA BARRA EN PROGRESO GENERAL
var player = GetPlayer();
var progresoTotal = player.GetVar("progresoTotal") / 100;

let barraTotal = document.querySelector("[data-acc-text='totalProgress']");

function progressBar() {
    var translateY = getTranslateY(barraTotal)
    gsap.to(barraTotal, { duration: 0, scaleX: progresoTotal, y: translateY, transformOrigin: "left bottom" })
}

function getTranslateY(myElement) {
    var style = window.getComputedStyle(myElement);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m42;
}

progressBar()

/*FUNCIONES ADICIONALES*/
//CUANDO CAMBIA EL TAMAÑO DE LA VENTANA
window.onresize = progressBar

//CUANDO ABRE EL MENU
let hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", function () {
    setTimeout(progressBar, 250);
});
