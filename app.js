const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

// console.log(add(5, 10));

let container = document.createElement("div");
container.classList.add("container");
let display = document.createElement("div");
display.classList.add("display");

document.body.appendChild(container);
container.appendChild(display);

let btnDiv = document.createElement("div");
btnDiv.classList.add("btnDiv");
container.appendChild(btnDiv);

let operators = ["/", "*", "-", "+"];

for (let i = 9; i >= 0; i--) {
  if (i == 9) {
    let operator = document.createElement("button");
    operator.classList.add("operator");
    operator.textContent = operators[0];
    btnDiv.appendChild(operator);
  } else if (i == 6) {
    let operator = document.createElement("button");
    operator.classList.add("operator");
    operator.textContent = operators[1];
    btnDiv.appendChild(operator);
  }
  let btn = document.createElement("button");
  btn.classList.add("btn");
  btn.textContent = i;
  btnDiv.appendChild(btn);

  btn.addEventListener("click", () => {
    display.textContent = btn.textContent;
  });
}
