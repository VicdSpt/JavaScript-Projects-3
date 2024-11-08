const accessKey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";

const formBox = document.querySelector("form")
const searchInputBox = document.getElementById("search-input")
const searchResultBox = document.querySelector(".search-results")
const showMoreButton = document.getElementById("show-more-button")

let inputData = "";
let page = 1;

async function searchImages(){
    inputData = searchInputBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();
    if(page === 1){
        searchResultBox.innerHTML = "";
    }

    const results = data.results;

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image = document.createElement("img");

        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        image.target = "_blank";
        imageLink.textContent = result.alt_description;

        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResultBox.appendChild(imageWrapper);
    });

    page++;

    if(page > 1){
        showMoreButton.style.display = "block";
    }
}

formBox.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMoreButton.addEventListener("click", () => {
    searchImages();
})