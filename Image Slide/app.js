const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const images = document.querySelectorAll("img");
const imageContainer = document.querySelector(".image-container");

let currentImage = 1;

let timeout;

nextBtn.addEventListener("click", () => {
  currentImage++;
  clearTimeout(timeout);
  updateImage();
});

prevBtn.addEventListener("click", () => {
  currentImage--;
  clearTimeout(timeout);
  updateImage();
});

updateImage();

function updateImage() {
  if (currentImage > images.length) {
    currentImage = 1;
  } else if (currentImage < 1) {
    currentImage = images.length;
  }
  imageContainer.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImage++;
    updateImage();
  }, 3000);
}
