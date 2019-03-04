// Objetos são Objetos
console.log(typeof({}))


// Objects são estruturas chave-valor, que também pode receber todos os tipos de dados

var obj = {}

obj.name = 'Guilherme'

obj['lastName'] = 'Moreira'

obj.fullName = function() { return `${this.name} ${this.lastName}` }

console.log(obj.fullName());
