import metodos from "./Totalizador"

describe("Totalizaor", () => {
  it("Mostrar porcentaje por estado", () => {
    expect(metodos.Totalizador("CA")).toEqual(8.25);
  }); 

  it("Mostrar precio neto", () => {
    expect(metodos.calcularPrecio(10,10)).toEqual(100);
  });

  it("Mostrar precio impuesto", () => {
    expect(metodos.calcularImpuesto(10,10,"CA")).toEqual(8.25);
  });

  it("Mostrar precio total con impuesto", () => {
    expect(metodos.calcularPrecioTotal(10,10,"CA")).toEqual(108.25);
  });

  it("Mostrar descuento 1000 3%", () => {
    expect(metodos.calcularDescuento(1000)).toEqual(30);
  });

  it("Mostrar descuento 3000 5%", () => {
    expect(metodos.calcularDescuento(3000)).toEqual(150);
  });

  it("Mostrar descuento 7000 7%", () => {
    expect(metodos.calcularDescuento(7000)).toBeCloseTo(490, 2);
  });

  it("Mostrar descuento 10000 10%", () => {
    expect(metodos.calcularDescuento(10000)).toEqual(1000);
  });

  it("Mostrar descuento 30000 15%", () => {
    expect(metodos.calcularDescuento(30000)).toEqual(4500);
  });
});
