const hourNumber = document.getElementById("hour");
const minuteNumber = document.getElementById("minutes");
const secondNumber = document.getElementById("seconds");
const ampmTime = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 24) {
    h = h - 24;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourNumber.innerText = h;
  minuteNumber.innerText = m;
  secondNumber.innerText = s;
  ampmTime.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock()
