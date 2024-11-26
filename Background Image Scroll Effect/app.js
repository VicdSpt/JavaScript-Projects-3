const backgroundImage = document.getElementById("bg-image")

window.addEventListener("scroll", () => {
    updateImage();
});

function updateImage(){
    backgroundImage.style.opacity = 1 - window.pageYOffset / 900;
    backgroundImage.style.backgroundSize = 160 - window.pageYOffset / 12 + "%";
}