var player = GetPlayer();
this.Location = player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src = Location + "NOMBRE_DE_CANCION.mp3";
audio.load();
audio.play();
