import operaciones from "./calculadora";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultados-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p> Resultado Suma: " + operaciones.sumar(firstNumber, secondNumber) + "</p>";
  div.innerHTML = "<p> Resultado Multiplicación: " + operaciones.multiplicar(firstNumber, secondNumber) + "</p>";
});
