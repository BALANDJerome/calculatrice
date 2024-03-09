const inputs = document.querySelectorAll("input");
let number1 = "";
let number2 = "";
let total;
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
    if (e.target.value.match(/[\d_.]/)) {
      number1 +=
        e.target.value == "." && number1.length === 0
          ? "0" + e.target.value
          : e.target.value;
      display.innerHTML = `
      <p>${total ? "" : number2} ${indicator}</p>
      <p>${number1}</p>
      `;
    } else if (e.target.value.match(/[+-/|x]/)) {
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
      } else {
        number2 = number1 ? number1 : number2;
      }
      total = "";
      display.innerHTML = `
      <p>${number2 ? number2 : total} ${e.target.value}</p>
      <p></p>
      `;
      number1 = "";
      indicator = e.target.value;
    } else if (e.target.value == "=") {
      number1 = parseFloat(number1);
      if (indicator.length > 0 && number1) {
        if (indicator == "+") {
          total = add(number2, number1);
        } else if (indicator == "-") {
          total = sub(number2, number1);
        } else if (indicator == "x") {
          total = mult(number2, number1);
        } else if (indicator == "/") {
          total = div(number2, number1);
        }
        display.innerHTML = `
        <p>${number2} ${indicator} ${number1}</p>
        <p>= ${total}</p>
        `;
        number2 = total;
        indicator = "";
      }
      number1 = "";
    } else {
      display.innerHTML = "";
      number1 = "";
      number2 = "";
      indicator = "";
    }
  });
});
