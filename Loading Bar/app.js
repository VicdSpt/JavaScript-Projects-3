const counterNumber = document.querySelector(".counter")
const loadingBar = document.querySelector(".loading-bar-front")

let idx = 0;

updateLoadingBar();

function updateLoadingBar() {
    counterNumber.innerText = idx + "%";
    loadingBar.style.width = idx + "%";
    idx++;
    if(idx < 101){
        setTimeout(updateLoadingBar, 20)
    }
}