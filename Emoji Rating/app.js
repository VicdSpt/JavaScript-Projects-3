const starsEmoji = document.querySelectorAll(".fa-star");
const emojisFace = document.querySelectorAll(".far");
const colorsEmojisFace = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starsEmoji.forEach((starEmoji, index) => {
  starEmoji.addEventListener("click", () => {
    updateRating(index);
  });
});

function updateRating(index) {
    starsEmoji.forEach((starEmoji, idx) => {
        if(idx < index + 1){
            starEmoji.classList.add("active");
        } else {
            starEmoji.classList.remove("active")
        }
    });

    emojisFace.forEach((emojiFace) => {
        emojiFace.style.transform = `translateX(-${index * 50}px)`;
        emojiFace.style.color = colorsEmojisFace[index];
    })


}