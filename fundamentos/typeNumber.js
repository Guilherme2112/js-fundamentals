console.log(typeof(1)) // number
console.log(typeof(7.0)) // number - Js categoriza inteiros e floats no mesmo tipo

// Você depende do método isInteger para descobrir se o número é inteiro
console.log(Number.isInteger(2))
console.log(Number.isInteger(2.0))
console.log(Number.isInteger(2.1))


// Alguns cuidados

console.log(100/ 0) // - Infiinity (js não lança um erro com isso)
console.log(0.7 + 0.1 == 0.8) // - false (imprecisão de floats devido a performance)
console.log('20' + 1) // 21 - Devido à sua tipagem fraca, o js tenta converter os dados pra number para fazer operações
console.log('a' + 2) // a2 - E esse é um dos efeitos dessa comportamentor
console.log(2 * 'a') // NaN - isso também
