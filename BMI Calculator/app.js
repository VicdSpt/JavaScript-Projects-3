const btnElement = document.getElementById("btn");
const bmiResult = document.getElementById("bmi-result");
const weightCondition = document.getElementById("weight-condition");

function calculateBMI() {
  const heightValue = document.getElementById("height").value / 100;
  const weightValue = document.getElementById("weight").value;

  const bmiValue = weightValue / (heightValue * heightValue);

  bmiResult.value = bmiValue;

  if (bmiValue < 18.5) {
    weightCondition.innerText = "UNDER WEIGHT";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.innerText = "NORMAL WEIGHT";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightCondition.innerText = "Overweight";
  } else if (bmiValue >= 30) {
    weightCondition.innerText = "Obesity";
  }
}

btnElement.addEventListener("click", calculateBMI);
