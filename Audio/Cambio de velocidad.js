var player = GetPlayer();
var velocidad = player.GetVar("audioSpeed");

const audio = document.getElementsByTagName("audio")

//VALIDA CUAL ES EL AUDIO EN REPRODUCCION PARA CAMBIAR LA VELOCIDAD UNICAMENTE DE ESE AUDIO
//TAMBIEN QUE NO MODIFICQUE LA CANCION DE FONDO
for (var i = 0; i < audio.length; i++) {
    if (!audio[i].paused && audio[i].id != "bgSong") {
        audio[i].playbackRate = velocidad
    }
}

