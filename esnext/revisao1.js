// block-level variables

{
  var a = 2
  let b = 3
  const c = 4
  console.log(b);
  console.log(c);
}

console.log(a); // 3. b and c are not available here.


// template strings
const product = 'ipad'
console.log(`${product} é caro!`);

// destructuring

const [l, e, ...tras] = 'Cod3r'
console.log(l);
console.log(e);
console.log(tras);

const { idade, nome } = { nome: "Guilherme", idade: 21 }
console.log(idade);
console.log(nome);
