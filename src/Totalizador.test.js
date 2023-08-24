import metodos from "./Totalizador"

describe("Totalizaor", () => {
  it("Mostrar porcentaje por estado", () => {
    expect(metodos.Totalizador("CA")).toEqual(8.25);
  }); 

  it("Mostrar precio neto", () => {
    expect(metodos.calcularPrecio(10,10)).toEqual(100);
  });
});
