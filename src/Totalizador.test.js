import Totalizador from "./Totalizador"

describe("Totalizaor", () => {
  it("Mostrar porcentaje por estado", () => {
    expect(Totalizador("CA")).toEqual(8.25);
  }); 
});
