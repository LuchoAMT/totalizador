import operaciones from "./calculadora.js";

describe("Sumar", () => {
  it("deberia sumar dos números", () => {
    expect(operaciones.sumar(3, 2)).toEqual(5);
  });
});

describe("Multiplicar", () => {
  it("deberia multiplicar dos números", () => {
    expect(operaciones.multiplicar(3, 2)).toEqual(6);
  });
});