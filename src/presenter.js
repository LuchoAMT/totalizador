import operaciones from "./calculadora";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#calculadora-form");
const div = document.querySelector("#resultados-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p><i>Resultado Suma:</i> " + operaciones.sumar(firstNumber, secondNumber) + "&nbsp; &nbsp; &nbsp; &nbsp; <i>Resultado Multiplicación:</i> " + operaciones.multiplicar(firstNumber, secondNumber) +"</p>";
});
