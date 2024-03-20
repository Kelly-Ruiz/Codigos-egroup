var player = GetPlayer();
var velocidad = player.GetVar("videoSpeed");

const video = document.getElementsByTagName("video")
const i = video.length - 1
video[i].playbackRate = velocidad

