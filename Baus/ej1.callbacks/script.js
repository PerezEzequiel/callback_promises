function sumar(a, b, callback) {
    let suma;
    setTimeout(()=>{
        suma = a+b;
        console.log(`La suma es ${suma}`);
        callback(suma);
    },2000);
}
function cuadrado(a) {
    let cuad;
    setTimeout(()=>{
        cuad = a*a;
        console.log(`El cuadrado es ${cuad}`);
        producto(a,10);
    },4000);
}
function producto(a, b) {
    let prod;
    setTimeout(()=>{
        prod = a*b;
        console.log(`El producto es ${prod}`);
        restar(prod,2)
    },3000);
}
function restar(a, b) {
    let rest;
    setTimeout(()=>{
        rest = a-b;
        console.log(`La resta es ${rest}`);
        informar(rest);
    },2000);
}
function informar(a) {
  console.log(`El resultado es ${a}`);
}

let suma = sumar(3, 4);
// let cuad = cuadrado(suma);
// let prod = producto(cuad, 10);
// let resta = restar(prod, 2);
// informar(resta);
