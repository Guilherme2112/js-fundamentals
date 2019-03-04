// Objects são functions
console.log(typeof(Object))
class Teste {}
console.log(typeof Teste);

// Funcions nao precisam retornar nada

function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3)

imprimirSoma(1,2,3,4,5) // js faz validação estrita da quantitade de parametros

imprimirSoma(2) // js define os parametros como 'undefined' por padrão


// Functions também podem retornar um valor
function returnSoma(a, b = 0) {
  return a + b
}

console.log(returnSoma(1)); // é possível definir o valor padrão dos argumentos, a partir do ES6

// functons podem ser atribuídas a uma variável

const somador = (a, b) => a + b

console.log(somador(10, 20))
