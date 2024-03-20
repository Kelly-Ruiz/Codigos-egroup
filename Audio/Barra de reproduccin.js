const videos = document.getElementsByTagName("video")
var video;

for (var i = 0 ; i< videos.length; i++){
    if(videos[i].paused == false){
        video = videos[i]
    }
}
 
let baseProgreso = document.querySelector("[data-acc-text='NOMBRE_DE_ACCESIBILIDAD_BASE.png']");
let barraProgreso= document.querySelector("[data-acc-text='NOMBRE_DE_ACCESIBILIDAD_BARRA.png']");

//MODIFICAR LA BARRA
video.addEventListener("timeupdate", function() {
    const Xtranslate = getTranslateX(barraProgreso);
    const Ytranslete = getTranslateY(barraProgreso);
    let desplazamientoX = video.currentTime / video.duration
   
    gsap.to(barraProgreso, { duration:0,scaleX: desplazamientoX, transformOrigin: "left" });
    barraProgreso.style.transform = `translate(${Xtranslate}px, ${Ytranslete}px)` + 'scale' + barraProgreso.style.transform.split('scale')[1];
   
    videoMuted()
})

function getTranslateX(myElement) {
    return myElement.style.transform.split('translate(')[1].split('px')[0]
}

function getTranslateY(myElement) {
    var style = window.getComputedStyle(myElement);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m42;
 }
 
//FUNCION PARA VOLVER EN EL VIDEO
barraProgreso.addEventListener("click", function(event) {
    var progressBarRect = baseProgreso.getBoundingClientRect();
    console.log("progressBarRect.left",progressBarRect.left)
   
    var clickX = event.clientX - progressBarRect.left;
    console.log("clickX",clickX)
    console.log("progressBarRect.width",progressBarRect.width)
   
    var percentage = (clickX / progressBarRect.width) * 100;
    console.log("percentage",percentage)
   
    // AJUSTA LA POSICION DEL VIDEO
    video.currentTime = (percentage / 100) * video.duration;

});
 /**
  * CUANDO SE AMPLIA PANTALLA SE VUELVE A ACTIVAR EL SONIDO, AQUI VALIDAMOS SI DEBE VOLVERLO A MUTEAR
  */
function videoMuted(){
    var player = GetPlayer();
    var videoMuted = player.GetVar("videoMuted");

    if(videoMuted == true)
        video.volume = 0
   
    else
        video.volume = 1
}
