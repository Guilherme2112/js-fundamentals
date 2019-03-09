function logIt(text) {
  console.log(this.text);
  return text
}

text = 'bla'
logIt('Teste') // logs 'bla', returns 'Teste'

var person = { text: 'I am a person' }

/*
  calls receives N args, the first one will act as the 'this' (context) of the
  function, while the others will be passed to the invoked method.
*/

var x = logIt.call(person) // logs 'I am a person', returns undefined
console.log(x);

var y = logIt.call(person, 'defined') // logs 'I am a person', returns 'defined'
console.log(y);



/*
  apply does pretty much the same thing, but it takes two args: the context and
  an array with the elements which will be passed to the called function
*/

// global is the global context in nodejs. module.exports is the context of the current file
var z = logIt.apply(global,['completely defined']) // logs 'bla', returns 'completely defined'
console.log(z);
