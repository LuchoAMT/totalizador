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

function calcularPrecioTotal(cant,precio,estado){
  return calcularPrecio(cant,precio)+calcularImpuesto(cant, precio, estado);
}

//descuento 1000 3%, 3000 5%, 7000 7%, 10000 10%, 30000 15%
function calcularDescuento(precioT){
  let desc = 0;
  if(precioT >= 1000 && precioT < 3000){
    desc = precioT*0.03;
  }
  if(precioT >= 3000 && precioT < 7000){
    desc = precioT*0.05;
  }
  if(precioT >= 7000 && precioT < 10000){
    desc = precioT*0.07;
  }
  if(precioT >= 10000 && precioT < 30000){
    desc = precioT*0.1;
  }
  if(precioT >= 30000){
    desc = precioT*0.15;
  }
  return desc;
}

function precioFinal(cant, precio, estado){
  let precioImpuesto = calcularPrecioTotal(cant, precio, estado);
  return precioImpuesto - calcularDescuento(cant*precio);
}

const metodos = {calcularPrecio, Totalizador,calcularImpuesto,calcularDescuento,calcularPrecioTotal, precioFinal};

export default metodos;
