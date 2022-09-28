let operator = "";
let currentValue = "";
let previousValue = "";

document.addEventListener("DOMContentLoaded", () => {
  let decimal = document.querySelector(".decimal");
  let equal = document.querySelector(".equal");
  let clear = document.querySelector("#clear-btn");

  let operators = document.querySelectorAll(".operators");
  let numbers = document.querySelectorAll(".number");

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");

  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    });
  });
});

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}
