const nombre = 'gabo'
const apellido = 'almonte'

const nombreCompleto = `${nombre} ${apellido}: ${1+1}`

console.log(nombreCompleto)

function getSaludo(nombre) {
  return 'Hola ' + nombre
}

console.log(`Esto es un texto: ${getSaludo(nombre)}`)