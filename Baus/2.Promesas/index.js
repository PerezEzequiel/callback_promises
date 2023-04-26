/*


//Resolve y reject son DOS CALLBACKS, Promise recibe un callback que dentro de ese callback tiene 2 callbacks

new Promise((resolve,reject)=>{
    if(esta todo bien){
        resolve(lo que me pidieron);
    }else{
        reject(no funciona);
    }
})

function validarPar(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof numero == "number") {
        let retorno = "Es par";
        if (numero % 2) {
          retorno = "Es impar";
        }
        resolve(retorno);
      }
      reject("No es numero");
    }, 3000);
  });
}

validarPar(23)
  .then((dataOk) => {
    console.log(dataOk);
  })
  .catch((error) => {
    console.log(error);
  });


*/

function sumarPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        let suma = a + b;
        console.log();
        resolve(suma);
      }
      reject("No son numeros");
    }, 2000);
  });
}

function cuadradoPromise(a) {
  return new Promise((resolve, reject) => {
    if (typeof a === "number") {
      let cuadrado = a * a;
      console.log();
      resolve(cuadrado);
    }
    reject("No son numeros");
  });
}

function multiplicarPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        let producto = a * b;
        console.log();
        resolve(producto);
      }
      reject("No son numeros");
    }, 2000);
  });
}

function restaPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        let resta = a - b;
        console.log();
        resolve(resta);
      }
      reject("No son numeros");
    }, 2000);
  });
}

function informarPromise(msj){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (msj != "") {
            resolve(msj);
          }
          reject("No son numeros");
        }, 2000);
      });
}

/*


sumarPromise(3,4).then((suma)=>{
    cuadradoPromise(suma).then((cuadrado)=>{
        multiplicarPromise(cuadrado,10).then((producto)=>{
            restaPromise(producto,2).then(()=>{

            })
        })
    })
}) 

*/