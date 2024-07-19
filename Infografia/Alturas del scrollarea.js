/**/
function altoTotalScroll(){
	// Obtener la referencia al contenedor del contenido de Storyline por su clase
	var contenedor = document.getElementsByClassName("scrollarea-area")[0]
	
	// Obtener el alto y ancho del contenedor
	var altoContenedor = contenedor.scrollHeight;
	//console.log("Altura completa del scroll:", altoContenedor);
	
	return(altoContenedor)
}

/*ALTURA DEL SCROLL EN PANTALLA*/
function altoContenedor(){
	// Obtener la referencia al contenedor del contenido de Storyline por su clase
	var contenedor = document.getElementsByClassName("window-slide _frame-slide primary-slide")[0];
	
	// Obtener el alto y ancho del contenedor
	var altoContenedor = contenedor.offsetHeight;
	//console.log("Altura visible de scroll:", altoContenedor);
	
	return(altoContenedor)
}

/*ALTURA PESONALIZADA*/
function altoSeccion(accName){	
	// Obtener la referencia al contenedor del contenido de Storyline por su clase
	var contenedor = document.querySelector("[data-acc-text="+accName+"]");
	
	// Obtener el alto y ancho del contenedor
	var altoContenedor = contenedor.offsetHeight;
	//console.log("Altura de la seccion:", altoContenedor);
	
	return(altoContenedor)
}

/*REFERENCIA A FUNCIONES*/
window.alturaElementos = {
	altoTotalScroll: altoTotalScroll,
	altoContenedor: altoContenedor,
	altoSeccion: altoSeccion
}