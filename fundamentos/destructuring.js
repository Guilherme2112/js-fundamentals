// Destructuring foi introduzido no ES2015 (ES6)
// Destructuring é a 'navegação via desmontagem em arrays/objetos para obter seus dados'

// Com objetos
const pessoa = { nome: 'Guilherme', sobrenome: 'Moreira', endereco: { cep: '04123-444', numero: '999' } }

const { nome, sobrenome } = pessoa // sem nomear as novas consts
console.log(nome, sobrenome);
const { nome: name, endereco: { numero: addressNumber } }  = pessoa

console.log(name, addressNumber);


// com arrays
const arr = [1,2,3,4,5]
const [first, , , , last] = arr

console.log(first, last);



// Uma grande utilidade do destructuring é na declaração de funções

function printFullName({ nome: n, sobrenome: s}) {
  console.log(`${n} ${s}`);
}
printFullName(pessoa)

function printDoubleOfFirstElement([f]) {
  console.log(f * 2);
}
printDoubleOfFirstElement(arr)
