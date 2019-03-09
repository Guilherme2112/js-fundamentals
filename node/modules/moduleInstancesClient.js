// Those two requires are objects directly, so node will cache it
const singleton1 = require('./moduleInstances/singleton') // counter is 0
const singleton2 = require('./moduleInstances/singleton') // counter is 0

// Those two are functions, and each call returns a new object
const isolatedInstance1 = require('./moduleInstances/multipleInstance')() // counter is 0
const isolatedInstance2 = require('./moduleInstances/multipleInstance')() // counter is 0


/*
  We call a method on the first singleton require,
  and it changes the second require's state, since they share the same reference
*/
singleton1.increment()
singleton1.increment()
singleton1.increment()


/*
  But on the single instance elements, they are each one, a different object
  with their own memory reference, which mean they have an isolated state
*/
isolatedInstance1.increment()
isolatedInstance1.increment()
isolatedInstance1.increment()


console.log(singleton1.counter) // 3
console.log(singleton2.counter) // 3

console.log(isolatedInstance1.counter) // 3
console.log(isolatedInstance2.counter) // 0
