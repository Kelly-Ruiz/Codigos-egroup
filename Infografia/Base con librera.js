/*CALCULA EL PORCENTAJE DE LA BARRA
Asigna el valor a la variable "num"*/
function calcularPorcentaje(x){
	// Calcular la altura del contenido del panel de desplazamiento
	var height = x.scrollHeight - x.offsetHeight;
	//to vertical en relación con la altura total
	setVar("num", x.scrollTop / height * 100);
	//console.log("num: ", getVar("num"), " scrollTop: ", x.scrollTop)
}

/*BLOQUEO DE DESPLAZAMIENTO RECIBE UN VALOR DEPENDIENDO DE LA ALTURA NECESARIA*/
function bloqueoScroll(stopScrollPosition){
	//console.log("bloqueoScroll posicion: ", stopScrollPosition)
	var x = document.getElementsByClassName("scrollarea-area")[0];
    
    // Establecer el estilo CSS para desactivar el desplazamiento elástico en dispositivos móviles
    x.style.webkitOverflowScrolling = "touch"; // Desactiva el desplazamiento elástico en iOS
    x.style.overflowY = "auto"; // Habilita el desplazamiento vertical
    
    x.onscroll = function(){
        // Calcular la altura del contenido del panel de desplazamiento
        var height = x.scrollHeight - x.offsetHeight;
        calcularPorcentaje(x)


        // Si la posición actual del scroll supera el punto de parada, prevenir el comportamiento por defecto (scroll)
        if (x.scrollTop >= stopScrollPosition) {
            x.scrollTop = stopScrollPosition; // Mantener el scroll en el punto de parada
            
            // Evitar el rebote en dispositivos móviles
            x.style.overflowY = 'hidden';
            setTimeout(function() {
                x.style.overflowY = 'auto';
            }, 0);
        }
    };
}

window.propiedadesScroll = {
	bloqueoScroll: bloqueoScroll,
	calcularPorcentaje: calcularPorcentaje
}

/*FUNCION BASE*/
function scrollPorcentaje() {
    var x = document.getElementsByClassName("scrollarea-area")[0];

    // Asociar una función al evento de redimensionamiento de la ventana
    $(window).resize(function(){
        // Calcular la nueva altura del contenido del panel de desplazamiento
        var newHeight = x.scrollHeight - x.offsetHeight;        
    });

    // Asignar una función al evento de desplazamiento del panel
    x.onscroll = function(){
        calcularPorcentaje(x)   
    };
};


/*LIBRERIA*/
// Verificar si jQuery ya está definido
if (typeof jQuery !== 'undefined') {
    // Si jQuery ya está cargado, ejecutar scrollPorcentaje
    scrollPorcentaje()
    
} else {
    // Si jQuery no está definido, cargar jQuery dinámicamente
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://code.jquery.com/jquery-3.6.4.min.js";
    
    script.onload = function () {
        // jQuery se ha cargado correctamente, ejecutar scrollPorcentaje
        console.log("cargando ...")
        scrollPorcentaje()
    };
    
    document.head.appendChild(script);
}