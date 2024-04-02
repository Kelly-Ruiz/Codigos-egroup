var player = GetPlayer();
var videoMuted = player.GetVar("videoMuted");

const video = document.getElementsByTagName("video")
const i = video.length - 1
video[i].muted = videoMuted