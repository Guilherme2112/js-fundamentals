// middleware (chain of responsability)
// is a design pattern widely used on the backend world, since it helps to isolate
// responsabilities throughout the code, and to create dynamic pipelines of decoupled
// code execution


const passo1 = (context, next) => {
  context.valor1 = 'middleware1'
  next()
}

const passo2 = (context, next) => {
  context.valor2 = 'middleware2'
  next()
}

const passo3 = context => context.valor3 = 'middleware3'

const exec = (context, ...middlewares) => {
  const execPasso = index => {
    middlewares && index < middlewares.length && middlewares[index](context, () => execPasso(index + 1))
  }
  execPasso(0)
}

const ctx1 = {}
const ctx2 = {}

exec(ctx1, passo1, passo2, passo3)
exec(ctx2, passo2, passo1, passo3)

console.log(ctx1);
console.log(ctx2);
