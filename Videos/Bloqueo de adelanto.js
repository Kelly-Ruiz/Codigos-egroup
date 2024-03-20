const video = document.getElementsByTagName("video")[0]
let previousTime = 0;

video.controls = "controls";

//VALIDAR CADA 1SEG CUAL ES EL TIEMPO DEL VIDEO
video.ontimeupdate = function () {
    setTimeout(() => {
        previousTime = video.currentTime;
    }, 1000)
}

//VALIDACION QUE EL SEGUDO AL CUAL QUIERE SALTAR NO SEA MAS ADELANTE DEL QUE ESTA VIENDO
video.onseeking = function () {
    if (video.currentTime > previousTime) {
        video.currentTime = previousTime;
    }
}

