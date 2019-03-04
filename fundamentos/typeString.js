// string é o tipo de dado que armazena txto no js

var str = 'Guilherme'

console.log(str.charAt(0)) // strings se comportam como um array e caracteres
console.log(str.concat(' Moreira'))
console.log(str.replace('e', 'ina'));
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log('Florzinha,Lindinha,Aoutralá'.split(',')) // Diferente dos números, podemos chamar métodos encima de valores literais. Isso ocorre pq o ponto possui outro significado quando estamos lidando com números.

var modernStr = `${str} Moreira
Santos
` // O es2015 inseriu as template strings, que oissuem suporte à interpolação e quebras de linha

console.log(modernStr);
