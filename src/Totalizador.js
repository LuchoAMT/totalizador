function Totalizador(estado){
  let impuesto = 0;
  switch(estado){
    case "CA":
      impuesto = 8.25;
      break;
    case "NV":
      impuesto = 8.00;
      break;
    case "TX":
      impuesto = 6.25;
      break;
    case "AL":
      impuesto = 4.00;
      break;
    case "UT":
      impuesto = 6.65;  
      break;
  }
  return impuesto;
}

function calcularPrecio(cant,precio){
  return cant*precio;
}

function calcularImpuesto(cant, precio, estado){
  return calcularPrecio(cant,precio)*(Totalizador(estado)/100)
}

const metodos = {calcularPrecio, Totalizador,calcularImpuesto};

export default metodos;
