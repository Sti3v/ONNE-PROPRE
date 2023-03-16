//** Ce bout de code permet de limiter la taille de la a 175% */

setInterval(function () {
  checkZoomLevel();
}, 2500);

function checkZoomLevel() {
  let zoomLevel = Math.round(window.devicePixelRatio * 100);
  if (zoomLevel > 175) {
    alert("Veuillez baisser le niveau de zoom avant de continuer ! Vous ne pouvez pas depasser 175%!");
    setTimeout(function () {
      checkZoomLevel();
    }, 2000);
  }
}

 
