// functions normais e arrow functions se comportam de maneira diferente:

// functions normais:

/*
  * o this dessas functions pode ser alterado, seja por estarem contidas em outras functions
  * (que muda o seu escopo léxico), ou via bind, que força um novo contexto de execução
*/

const pessoa = {
  name: 'Teste',
  getName: function() { return this.name }
}

const nonPessoa = {
  name: 'Coloco ketchup na pizza'
}

console.log(pessoa.getName()) // Teste
console.log(pessoa.getName.bind(nonPessoa)()) // Coloco ketchup na pizza

// Arrow Functions
/*
  * Se comportam de maneira diferente. O seu this é o this léxico (isso é, de quando foram declaradas)
  * e seu this não pode ser mudado
*/

const pessoaArrow = {
  name: 'TesteArrow'
}

const nonPessoaArrow = {
  name: 'Gosto de baunilha'
}

var name = 'TesteArrow Out'

func = () => name

pessoaArrow.getName = func
nonPessoaArrow.getName = func

console.log(pessoaArrow.getName()) // TesteArrowArrow Out
console.log(pessoaArrow.getName.bind(nonPessoaArrow)()) // Gosto de baunilha ? Nop. TesteArrow Out
