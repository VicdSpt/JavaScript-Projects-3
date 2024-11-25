const inputElement = document.querySelector(".input");
const bodyElement = document.querySelector("body");

inputElement.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
  if (inputElement.checked) {
    bodyElement.style.background = "black";
  } else {
    bodyElement.style.background = "white";
  }
}

inputElement.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}
