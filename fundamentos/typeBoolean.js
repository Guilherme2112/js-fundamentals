// boolean é true ou false. sem conversa

var bool = true

console.log(bool);


/*
  Porém é possível aplcicar lógica booleana em outros tipos de dados. Um atécnica interessante para descobrir como
  o dado se comportatria nesse caso, é usar a dupla negação (!!). Estruturas de controle fazem isso por baixo dos panos.
*/

console.log('Valores truthy')
console.log(!!true);
console.log(!!' ');
console.log(!!'bla');
console.log(!!1);
console.log(!!-1);
console.log(!!Infinity); // cuidado. Isso pode levar a casos de erro (divião por zero) a serem considerados normais sem que você perceba. Javascript considera a divisão por zero como infinito.
console.log(!!(x = true));
console.log(!!(x = 1));
console.log(!![]); // cuidado, principalmente se você programa em ruby/rails e usa bastante o método present?

console.log('Valores falsey')
console.log(!!false);
console.log(!!'');
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);
console.log(!!(x = false));
