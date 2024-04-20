function saludar(params) {
  return params;
}

//console.log(saludar("hola"));

const saludar2 = function (nombre) {
  return nombre;
};

//console.log(saludar2("Diego"));

const saludar3 = (nombre) => {
  return nombre;
};

//console.log(saludar3("Gabo"));

const fun1 = () =>{
  const obj = {
    a:2
  }
  return obj
}

const fun2 = () =>{
  return{a:3}
}

const fun3 = () => ({a:4})

//console.log(fun1())
//console.log(fun2())
//console.log(fun3())

const tar = (a) => ({valor1:1,valor2:a})

const valor = tar(2)

console.log(`Valor1: ${valor.valor1}  Valor2:${valor.valor2}`)

