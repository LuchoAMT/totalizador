import metodos from "./Totalizador"

const cantidad = document.querySelector("#cant-item");
const precio = document.querySelector("#precio-x-item");
const estado = document.querySelector("#est-item")
const form = document.querySelector("#fb-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML += "<p>La cantidad de items ingresada es: "+ cantidad.value +
   " con un precio de: " + precio.value + " </br> Estado seleccionado: " + estado.value + " porcentaje de impuestos: "+ metodos.Totalizador(estado.value) +"%"
   + "</br> precio neto: " + metodos.calcularPrecio(cantidad.value, precio.value) 
   + "</br> impuesto para "+ estado.value +": " + metodos.calcularImpuesto(cantidad.value, precio.value,estado.value) 
   + "</br> Precio con impuesto: " + metodos.calcularPrecioTotal(cantidad.value, precio.value,estado.value)
   + "</br> Descuento: " + metodos.calcularDescuento(metodos.calcularPrecio(cantidad.value, precio.value))
   + "</p>";
});
