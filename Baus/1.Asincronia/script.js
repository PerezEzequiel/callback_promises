//Callback = puntero a funcion.

function sumar(a, b, callback) {
  let suma;
  setTimeout(() => {
    suma = a + b;
    callback(suma);
  }, 2000);
}

function cuadrado(a, callback) {
  let cuad;
  setTimeout(() => {
    cuad = a * a;
    callback(cuad);
  }, 4000);
}

function multiplicar(a, b, callback) {
  let prod;

  setTimeout(() => {
    prod = a * b;
    callback(prod);
  }, 3000);
}

function restar(a, b, callback) {
  let rest;

  setTimeout(() => {
    rest = a - b;
    callback(rest);
  }, 2000);
}

function informar(resultado) {
  console.log(`El resultado es ${resultado}`);
}


sumar(3,4,(resultadoSuma)=>{
    cuadrado(resultadoSuma,(resultadoCuadrado)=>{
        multiplicar(resultadoCuadrado,10,(resultadoMultiplicacion)=>{
            restar(resultadoMultiplicacion,2, (resultadoResta)=>{
                informar(resultadoResta);
            });
        })
    })
})


