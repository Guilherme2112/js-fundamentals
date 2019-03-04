// hoisting é a prática do js de mover as declarações de variáveis para o topo do seu escopo

console.log(a); // undefined. O comum em outras linguagens é uma exception
var a = 0
console.log(a); // 0

/*
  * Na prática, o que ocorreu foi o seguinte:
  * var a
  * console.log(a);
  * a = 0
  * console.log(a);
*/


// Como vars só possuem o escopo global e de function, o mesmo ocorreria dentro da functions caso o codigo estivesse em uma
// Js não aplica hoisting em lets
