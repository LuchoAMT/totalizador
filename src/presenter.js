//import fizzbuzz from "./fizzbuzz"

const cantidad = document.querySelector("#cant-item");
const form = document.querySelector("#fb-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML += "<p>La cantidad de items ingresada es: "+ cantidad.value +"</p>";
});
