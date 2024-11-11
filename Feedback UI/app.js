const ratingEmojis = document.querySelectorAll(".rating")
const btnSendReview = document.getElementById("btn")

const containerBox = document.getElementById("container")

let selectedRating = "";

ratingEmojis.forEach((ratingEmoji) => {
    ratingEmoji.addEventListener("click", (event) => {
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
    });
});

btnSendReview.addEventListener("click", () => {
    if(selectedRating !== ""){
        containerBox.innerHTML = `<strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
});

function removeActive(){
    ratingEmojis.forEach((ratingEmojis) => {
        ratingEmojis.classList.remove("active");
    });
};