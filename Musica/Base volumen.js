var player = GetPlayer();
var audio = document.getElementById('bgSong');
const volumen = player.GetVar("volumen");
audio.volume = volumen * 0.2;
