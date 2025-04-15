const countDisplay = document.getElementById("count");
const btnPlus = document.querySelector(".button1");
const btnMinus = document.querySelector(".button2");
const btnReset = document.querySelector(".buttonReset");
const freeShippingMessage = document.createElement("span");
freeShippingMessage.textContent = " You have free shipping!";

let count = 0;

function updateUI() {
  countDisplay.textContent = count;

  if (count >= 10 && !countDisplay.contains(freeShippingMessage)) {
    countDisplay.appendChild(freeShippingMessage);
  } else if (count < 10 && countDisplay.contains(freeShippingMessage)) {
    countDisplay.removeChild(freeShippingMessage);
  }

  if (count >= 20) {
    btnPlus.style.backgroundColor = "red";
  } else {
    btnPlus.style.backgroundColor = ""; 
  }

  btnMinus.disabled = count === 0;
}

btnPlus.addEventListener("click", () => {
  count++;
  updateUI();
});

btnMinus.addEventListener("click", () => {
  if (count > 0) {
    count--;
    updateUI();
  }
});

btnReset.addEventListener("click", () => {
  count = 0;
  updateUI();
});
