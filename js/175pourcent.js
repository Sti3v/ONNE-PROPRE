function checkZoomLevel() {
  var zoomLevel = Math.round(window.devicePixelRatio * 100);
  if (zoomLevel > 175) {
    alert("Veuillez baisser le niveau de zoom avant de continuer ! Vous ne pouvez pas depasser 175%!");
    setTimeout(function () {
      checkZoomLevel();
    }, 2000);
  }
}

setInterval(function () {
  checkZoomLevel();
}, 2500); // Vérification toutes les 1000ms (1 seconde)
