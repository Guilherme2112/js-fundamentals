// you can deceive node's singleton behavior with factories

module.exports = () => {
  return {
    name: 'Multiple instances',
    counter: 0,
    increment() { this.counter++ }
  }
}
