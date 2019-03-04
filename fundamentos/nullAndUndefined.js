// Undefined é undefined
console.log(typeof(undefined));

// null é um objeto
console.log(typeof(null));

/*
  A diferença conceitual por trás de null e undefined depende do conhecimento de tipos primitivos e tipos por referência,
  onde um item null explicitamente não possui referência ou valor primitivo armazenado, enquanto algo undefined não foi definido na execução do código
*/

var x
console.log(x); // undefined - seu valor não foi atribuído
// console.log(y); // erro. essa variável não foi declarada
x = null

console.log(x);

// Evie definir manualmente algo como undefined, pois o js deve ser o responsável por gerenciar variaveis com tal valor. Quando você quiser declarar explicitamente que algo não possui valor, prefira usar null.
