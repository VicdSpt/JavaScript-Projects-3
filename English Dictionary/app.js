const searchWord = document.getElementById("input");
const infoTextOutput = document.getElementById("info-text");
const meaningContainer = document.getElementById("meaning-container");
const titleWord = document.getElementById("title");
const explanation = document.getElementById("meaning");
const audioBox = document.getElementById("audio");

async function fetchAPI(word) {
  try {
    infoTextOutput.style.display = "block";
    meaningContainer.style.display = "none";
    infoTextOutput.innerText = `Searching the meaning of "${word}"`;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    const result = await fetch(url).then((res) => res.json());

    if (result.title) {
      meaningContainer.style.display = "block";
      infoTextOutput.style.display = "none";
      titleWord.innerText = word;
      explanation.innerText = "N/A";
      audioBox.style.display = "none";
    } else {
      infoTextOutput.style.display = "none";
      meaningContainer.style.display = "block";
      audioBox.style.display = "inline-flex";
      titleWord.innerText = result[0].word;
      explanation.innerText =  result[0].meanings[0].definitions[0].definition;
      audioBox.src = result[0].phonetics[0].audio;
    }
  } catch (error) {
    console.log(error);
    infoTextOutput.innerText = `an error happened, try again later`;
  }
}

searchWord.addEventListener("keyup", (event) => {
  if (event.target.value && event.key === "Enter") {
    fetchAPI(event.target.value);
  }
});
