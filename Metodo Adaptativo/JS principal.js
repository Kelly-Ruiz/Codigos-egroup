var player = GetPlayer();

//1. RECIBIR EL NUMERO DE SLIDE---------------------
var query = window.location.search.substring(7);
player.SetVar("JumpToSlide", query);
//console.log("JumpToSlide ", query)


//2. GUARDAR EL NUMERO DE SLIDE ACTUAL---------------------
var slideActual = player.GetVar("SlidesViewed")
//console.log("slideActual ", slideActual)


//3. VALIDAR PARA PROGRESO---------------------
var slideViewed
if (query > slideActual) {
  slideViewed = query
}
else {
  slideViewed = slideActual
}
//console.log("slideViewed ", slideViewed)


//4.Enviar tiempo de Slide---------------------
var elapsedTime

function getElapsedTime() {
  elapsedTime = player.GetVar("ElapsedTime")
  //console.log("elapsedTime ", elapsedTime)
}
setInterval(getElapsedTime, 1000);
//console.log("elapsedTime ", elapsedTime)


//5.CONOCER LA FECHA DEL ACCESO---------------------
var accessDate = new Date()
player.SetVar("AccessDate", accessDate); //ENVIAR A STORY


//6. CONOCER EL TOTAL DE SLIDES EN EL MENU---------------------
var totalSlides = player.GetVar("TotalSlides")
//console.log("totalSlides ", totalSlides)

//7. ENVIAR TIPO DE DISPOSITIVO---------------------
var device = player.GetVar("Dispositivo")
//console.log("totalSlides ", totalSlides)


//8. VALIDAR PROGRESO DEL CURSO Y COMPLETAR---------------------
var isApproved = false
var percent = player.GetVar("aprprovedPercent")
var progress = (slideActual * 100) / totalSlides

if (progress > percent) {
  isComplete = true
  player.SetVar("IsComplete", true)
}
 