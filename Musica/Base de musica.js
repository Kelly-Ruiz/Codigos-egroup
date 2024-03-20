//Carga el el scrip a lo largo del documento
function add_line() {
    var line = document.createElement("audio");
    var head = document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src = "";
    line.id = "bgSong";
    line.autoplay = true;
    line.loop = true;
    head.appendChild(line);
}
if (document.getElementById('bgSong') == null) {
    add_line();
    var audio = document.getElementById('bgSong');
    audio.volume = 0.2;
}

var player = GetPlayer();
var audio = document.getElementById('bgSong');
this.Location = player.GetVar("location");

if (audio.duration > 0 && !audio.paused) {
    //si ya habia audio no hacer nada
}
else {
    audio.src = Location + "NOMBRE_DE_PISTA.mp3";
    // Show loading animation.
    var playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Automatic playback started!
            // Show playing UI.
        })
            .catch(error => {
                // Auto-play was prevented
                // Show paused UI.
            });
    }
}
