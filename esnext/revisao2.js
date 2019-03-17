// Arrow functions

const soma = (a, b) => a + b

// pay atention to the `this`. it is imutable on arrow functions

const lexico1 = () => console.log( this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default

function log(texto = "bla") {
  console.log(texto);
}

log();
log('Teste');
