GLOBALZONA = 0 // Variável global, gerlamente você não precisa disso
var a = 1 // Variável de escopo de função
let b = 2 // Variável de escopo de bloco
const c = 3 // constante


var a = 10 // vars podem ser redeclaradas no mesmo escopo, apesar de nao fazer sentido
// let b = 22  // lets nao podem ser re-declaradas no mesmo escopo
// const c = 30 // e nem consts. consts também nao podem ter seu valor inicial alterado

console.log(GLOBALZONA, a, b, c)
