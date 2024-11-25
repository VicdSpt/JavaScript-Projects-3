let num = 0;

const valueNumber = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      num--;
    } else if (styles.contains("increase")) {
      num++;
    } else {
      num = 0;
    }
    valueNumber.textContent = num;
    if (num > 0) {
      valueNumber.styles.color = "green";
    } else if (num < 0) {
      valueNumber.style.color = "red";
    } else {
      valueNumber.style.color = "black";
    }
  });
});
