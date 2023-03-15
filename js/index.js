function checkZoomLevel() {
  var zoomLevel = Math.round(window.devicePixelRatio * 100);
  if (zoomLevel > 175) {
    alert("Veuillez baisser le niveau de zoom avant de continuer !");
    setTimeout(function () {
      checkZoomLevel();
    }, 2000);
  }
}

setInterval(function () {
  checkZoomLevel();
}, 1000); // Vérification toutes les 1000ms (1 seconde)
