const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
  return b === 0 ? "Nice Try" : a / b;
};

let firstNum = "";
let secondNum = "";
let operator = "";
let result = 0;

let container = document.createElement("div");
container.classList.add("container");
let display = document.createElement("div");
display.classList.add("display");
display.innerText = 0;
document.body.appendChild(container);
container.appendChild(display);

let btnDiv = document.createElement("div");
btnDiv.classList.add("btnDiv");
container.appendChild(btnDiv);

let buttons = [
  "C",
  "Del",
  "%",
  "/",
  7,
  8,
  9,
  "*",
  4,
  5,
  6,
  "-",
  1,
  2,
  3,
  "+",
  "00",
  0,
  ".",
  "=",
];

buttons.forEach((button) => {
  let btn = document.createElement("button");
  btn.classList.add("btn");
  if (["/", "*", "+", "-", "%"].includes(button)) {
    btn.classList.add("operator");
  } else {
    btn.classList.add("number");
  }

  btn.value = button;
  btn.textContent = button;
  btnDiv.appendChild(btn);

  btn.addEventListener("click", () => {
    if (!isNaN(button) || button === ".") {
      if (button === ".") {
        if (!firstNum.includes(".")) {
          firstNum += button;
          display.innerText = firstNum;
        }
      } else {
        firstNum += btn.textContent;
        display.innerText = firstNum;
      }
    } else if (button === "Del") {
      firstNum = firstNum.slice(0, -1);
      display.innerText = firstNum || 0;
    } else if (button === "C") {
      firstNum = "";
      secondNum = "";
      operator = "";
      display.innerText = 0;
    } else if (button === "=") {
      result = operate(parseFloat(secondNum), parseFloat(firstNum), operator);
      display.innerText = result;
      firstNum = result.toString();
      operator = "";
    } else if (button === "%") {
      if (firstNum) {
        // Calculate percentage
        firstNum = (parseFloat(firstNum) / 100).toString();
        display.innerText = firstNum; // Update display
      }
    } else {
      if (firstNum) {
        secondNum = firstNum;
        operator = button;
        firstNum = "";
      }
    }
  });
});

const operate = (firstNum, secondNum, operator) => {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
    case "-":
      return subtract(firstNum, secondNum);
    case "*":
      return multiply(firstNum, secondNum);
    case "/":
      return divide(firstNum, secondNum);
    default:
      return 0;
  }
};
