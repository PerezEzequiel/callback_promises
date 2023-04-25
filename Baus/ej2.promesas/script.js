function validarPar(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof numero === "number") {
        let retorno = "Es par";
        if (numero % 2) {
          retorno = "Es impar";
        }
        resolve(retorno);
      }
      reject("Eso no es par ni impar");
    }, 3000);
  });
}


function sumarPromise(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(typeof a === "number" && typeof b === "number"){
                let suma = a+b;
                console.log(`La suma es ${suma}`);
                resolve(suma);
            }
            reject("Parametros invalidos");
        }, 2000);
    })
}


validarPar(24)
  .then((data) => {console.log(data)})
  .catch((err) => {console.log(error)});
