const btnGetPhotos = document.getElementById("btn");
const errorMessage = document.getElementById("errorMessage");
const galleryContainer = document.getElementById("gallery");

async function fetchImage() {
  const inputValue = document.getElementById("input").value;

  if (inputValue > 10 || inputValue < 1) {
    errorMessage.style.display = "block";
    errorMessage.innerText = "Select a number between 1 and 11";
    return;
  }

  imgs = "";

  try {
    btnGetPhotos.style.display = "none";
    const loading = `<img src="spinner.svg" />`;
    galleryContainer.innerHTML = loading;
    await fetch(
      `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
        Math.random() * 1000
      )}&client_id=B8S3zB8gCPVCvzpAhCRdfXg_aki8PZM_q5pAyzDUvlc`
    ).then((res) =>
      res
        .json()
        .then((data) => {
          if (data) {
            data.forEach((pic) => {
              imgs += `
            <img src=${pic.urls.small} alt="image"/>
            `;
              galleryContainer.style.display = "block";
              galleryContainer.innerHTML = imgs;
              btnGetPhotos.style.display = "block";
              errorMessage.style.display = "none";
            });
          }
        })
    );
  } catch (error) {
    console.log(error);
    errorMessage.style.display = "block";
    errorMessage.innerHTML = "An error happened, try again later";
    btnGetPhotos.style.display = "block";
    galleryContainer.style.display = "none";
  }
}

btnGetPhotos.addEventListener("click", fetchImage);
