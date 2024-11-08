const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);

const questionSentence = document.getElementById("question");
const input = document.getElementById("input");
const form = document.getElementById("form");
const scoreDigit = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreDigit.innerText = `Score: ${score}`;

questionSentence.innerText = `What is ${number1} multiply by ${number2} ?`;

const correctAnswer = number1 * number2;

form.addEventListener("submit", () => {
  const userAnswer = +input.value;
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}