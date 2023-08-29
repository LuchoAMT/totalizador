import metodos from "./Totalizador"

const cantidad = document.querySelector("#cant-item");
const precio = document.querySelector("#precio-x-item");
const estado = document.querySelector("#est-item")
const form = document.querySelector("#fb-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML += "<p> Precio neto: $" + metodos.calcularPrecio(cantidad.value, precio.value)
  + "</br> Descuento: $" + metodos.calcularDescuento(metodos.calcularPrecio(cantidad.value, precio.value))
  + "</br> Impuesto para " + estado.value + ": $" + metodos.calcularImpuesto(cantidad.value, precio.value, estado.value)
  + "</br> Precio Total: $" + metodos.precioFinal(cantidad.value, precio.value, estado.value)
  + "</p>";
});
