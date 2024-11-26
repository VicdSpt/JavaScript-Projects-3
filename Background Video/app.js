const btn = document.querySelector(".btn");
const video = document.querySelector(".background-video");
const btnPause = document.querySelector(".fa");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
  if (btn.classList.contains("pause")) {
    btn.classList.remove("pause");
    video.play();
    btnPause.classList.add("fa-pause");
    btnPause.classList.remove("fa-play");
  } else {
    btn.classList.add("pause");
    video.pause();
    btnPause.classList.remove("fa-pause");
    btnPause.classList.add("fa-play");
  }
});

window.addEventListener("load", () => {
    preloader.style.zIndex = "-999"
})