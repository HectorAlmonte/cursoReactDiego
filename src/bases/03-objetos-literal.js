const mujer = {
  nombre: 'Algo',
  direccion:{
    ciudad:'ilo'
  },
}

const mujer2 = {...mujer}

console.log(mujer)

mujer2.nombre = "algo2"

console.log(mujer2)