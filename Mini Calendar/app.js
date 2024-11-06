const monthName = document.getElementById("month-name");
const dayName = document.getElementById("day-name");
const dayDate = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date(); // Declare the date variable here

const actualTime = document.getElementById("actual-time");
const hours = date.getHours();
const minutes = date.getMinutes();

actualTime.innerText = `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;

const month = date.getMonth();
monthName.innerText = date.toLocaleString("be", {
  month: "long",
});

dayName.innerText = date.toLocaleString("be", {
  weekday: "long",
});

dayDate.innerText = date.getDate();

year.innerText = date.getFullYear();
