const countDisplay = document.getElementById("count");
const btnPlus = document.querySelector(".button1");
const btnMinus = document.querySelector(".button2");

let count = 0;

btnPlus.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

btnMinus.addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});
