const countDisplay = document.getElementById("count");
const btnPlus = document.querySelector(".button1");
const btnMinus = document.querySelector(".button2");
const btnReset = document.querySelector(".buttonReset");
const freeShippingMessage = document.createElement("span");
freeShippingMessage.textContent = " You have free shipping!";

let count = 0;

btnPlus.addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;

  if (count >= 10 && !countDisplay.contains(freeShippingMessage)) {
    countDisplay.appendChild(freeShippingMessage); // Add free shipping message
  }

  if (count >= 20) {
    btnPlus.style.backgroundColor = "red";
  }

    if (count < 20) {
      btnPlus.style.backgroundColor = ""; // Reset background color when count is less than 20
    }

     if (count > 0) {
    btnMinus.disabled = false;
  }
  
});
