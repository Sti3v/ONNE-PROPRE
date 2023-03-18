const video = document.querySelector("video");
console.log(video);
video.addEventListener(
  "ended",
  function () {
    this.currentTime = 0;
    this.play();
  },
  false
);
