// var - Escopos global e de função
var w = 0
{ var x = 1 }

console.log(w); // 0
console.log(x); // 1

function logY() {
  var y = 2
  console.log(y);
}

for (var i = 0; i<3;i++) {
  console.log(i);
}

console.log(i); // i = 3

// console.log(y); // undefined


// let - escopo de bloco

var text = 'estou fora'

{
  let text  = 'estou dentro'
  console.log(text);
}

console.log(text);


for(let j = 0; j<3;j++) {
  console.log(j);
}

// console.log(j); // undefined
