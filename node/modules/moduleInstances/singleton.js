// Node modules are singletons by default, this is how node js works.

module.exports = {
  name: 'Singleton',
  counter: 0,
  increment() { this.counter++ }
}
