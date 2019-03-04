// Array são objetos
console.log(typeof([]));
// São uma estrutura ede dados unidimensional, e indexada por posições sequenciais numéricas

var arr = [1, 2, 3]

// Devido à tipagem dinâmica, o js aceita elementos de todos os tipos no Array

console.log([1, true, null, 3.5, 'a']);

// Representando uma estrutura de fila, o array possui os métodos push e pop

// Use com parcimônia, pois são métodos destrutivos.
console.log(arr.push(2)) // adiciona um 2 no fim da fila
console.log(arr.pop()) // retira o 2
