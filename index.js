const inputs = document.querySelectorAll("input");
let number1 = "";
let number2 = "";
let numbersDisplay = "";
let indicator = "";

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mult(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

inputs.forEach((input) => {
  input.addEventListener("click", (e) => {
    console.log(e.target.value);
    if (e.target.value.match(/[\d_.]/)) {
      number1 +=
        e.target.value == "." && number1.length === 0
          ? "0" + e.target.value
          : e.target.value;

      display.innerText = `${number1}`;
    } else if (e.target.value.match(/[+-/|x]/)) {
      number1 = parseFloat(number1);
      display.innerText = e.target.value;
      if (indicator.length > 0 && number1) {
        if (indicator == "+") {
          number2 = add(number2, number1);
        } else if (indicator == "-") {
          number2 = sub(number2, number1);
        } else if (indicator == "x") {
          number2 = mult(number2, number1);
        } else if (indicator == "/") {
          number2 = div(number2, number1);
        }
      } else {
        number2 = number1 ? number1 : number2;
      }
      number1 = "";
      indicator = e.target.value;
    } else if (e.target.value == "=") {
      number1 = parseFloat(number1);
      if (indicator.length > 0 && number1) {
        if (indicator == "+") {
          number2 = add(number2, number1);
        } else if (indicator == "-") {
          number2 = sub(number2, number1);
        } else if (indicator == "x") {
          number2 = mult(number2, number1);
        } else if (indicator == "/") {
          number2 = div(number2, number1);
        }
      }
      indicator = "";
      number1 = "";
      display.innerText = number2;
    } else {
      display.innerText = "";
      number1 = "";
      number2 = "";
      indicator = "";
    }
    console.log(number1, indicator, number2);
  });
});
