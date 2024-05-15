const video = document.getElementsByTagName("video")
for (i = 0; i < video.length ; i++){
  //validar todos los videos
	if(!video[i].paused){
    //activar controles en el video que se este reproduciendo
		video[i].controls = "controls";
		break
	}
}
