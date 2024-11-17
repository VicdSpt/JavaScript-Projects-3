const currencyOne = document.getElementById("currency-first")
const worthOne = document.getElementById("worth-first")
const currencyTwo = document.getElementById("currency-second")
const worthTwo = document.getElementById("worth-second")
const exchangeRate = document.getElementById("exchange-rate")

updateRate()

function updateRate() {
    fetch(
      `https://v6.exchangerate-api.com/v6/adc5b0df303385ba9ef242c6/latest/${currencyOne.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        const rate = data.conversion_rates[currencyTwo.value];
        console.log(rate);
        exchangeRate.innerText = `1 ${currencyOne.value} = ${
          rate + " " + currencyTwo.value
        }`;
  
        worthTwo.value = (worthOne.value * rate).toFixed(2)
      });
  }

currencyOne.addEventListener("change", updateRate);
currencyTwo.addEventListener("change", updateRate);
worthOne.addEventListener("input", updateRate);