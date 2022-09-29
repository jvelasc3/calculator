let operator = "";
let previousValue = "";
let currentValue = "";

document.addEventListener("DOMContentLoaded", () => {
  let decimal = document.querySelector(".decimal");
  let equal = document.querySelector(".equal");
  let clear = document.querySelector("#clear-btn");

  let operators = document.querySelectorAll(".operator");
  let numbers = document.querySelectorAll(".number");

  let previousScreen = document.querySelector(".previous");
  let currentScreen = document.querySelector(".current");

  numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      handleNumber(e.target.textContent);
      currentScreen.textContent = currentValue;
    });
  });

  operators.forEach((op) =>
    op.addEventListener("click", function (e) {
      handleOperator(e.target.textContent);
      previousScreen.textContent = previousValue + " " + operator;
      currentScreen.textContent = currentValue;
    })
  );

  clear.addEventListener("click", () => {
    previousValue = "";
    currentValue = "";
    operator = "";
    previousScreen.textContent = currentValue;
    currentScreen.textContent = currentValue;
  });

  equal.addEventListener("click", () => {
    if (currentValue != "" && previousValue != "") {
      calculate();
      previousScreen.textContent = "";
      if (previousValue.length <= 5) {
        currentScreen.textContent = previousValue;
      } else {
        currentScreen.textContent = previousValue.slice(0, 5) + "...";
      }
    }
  });

  decimal.addEventListener("click", () => {
    addDecimal();
  });
});

function handleNumber(num) {
  if (currentValue.length <= 5) {
    currentValue += num;
  }
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = "";
}

function calculate() {
  previousValue = Number(previousValue);
  currentValue = Number(currentValue);

  if (operator === "+") {
    previousValue += currentValue;
  } else if (operator === "-") {
    previousValue -= currentValue;
  } else if (operator === "x") {
    previousValue *= currentValue;
  } else if (operator === "/") {
    previousValue /= currentValue;
  }

  previousValue = roundNum(previousValue);
  previousValue = previousValue.toString();
  currentValue = previousValue.toString();
}

function roundNum(num) {
  return Math.round(num * 1000) / 1000;
}

function addDecimal() {
  if (!currentValue.includes(".")) {
    currentValue += ".";
  }
}

window.onkeydown = function (e) {
  e.preventDefault();
  let x = e.key;
  let choice;
  switch (x) {
    case "1":
      choice = document.querySelector(".one");
      choice.click();
      break;
    case "2":
      choice = document.querySelector(".two");
      choice.click();
      break;
    case "3":
      choice = document.querySelector(".three");
      choice.click();
      break;
    case "4":
      choice = document.querySelector(".four");
      choice.click();
      break;
    case "5":
      choice = document.querySelector(".five");
      choice.click();
      break;
    case "6":
      choice = document.querySelector(".six");
      choice.click();
      break;
    case "7":
      choice = document.querySelector(".seven");
      choice.click();
      break;
    case "8":
      choice = document.querySelector(".eight");
      choice.click();
      break;
    case "9":
      choice = document.querySelector(".nine");
      choice.click();
      break;
    case "0":
      choice = document.querySelector(".zero");
      choice.click();
      break;
    case "/":
      choice = document.querySelector(".division");
      choice.click();
      break;
    case "*":
      choice = document.querySelector(".multiply");
      choice.click();
      break;
    case "-":
      choice = document.querySelector(".minus");
      choice.click();
      break;
    case "+":
      choice = document.querySelector(".plus");
      choice.click();
      break;
    case ".":
      choice = document.querySelector(".decimal");
      choice.click();
      break;
    case "Enter":
      choice = document.querySelector(".equal");
      choice.click();
      break;
    case "Backspace":
      choice = document.querySelector("#clear-btn");
      choice.click();
      break;
  }
};
