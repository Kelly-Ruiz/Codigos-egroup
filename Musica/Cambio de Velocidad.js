var player = GetPlayer();
var velocidad = player.GetVar("audioSpeed");

const audio = document.getElementsByTagName("audio")

for (var i = 0; i < audio.length; i++) {
    if (!audio[i].paused && audio[i].id != "bgSong") {
        audio[i].playbackRate = velocidad
    }
}