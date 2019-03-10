// who is this in a node module?

console.log(this === global);
console.log(this === module);
console.log(this === module.exports);
console.log(this === exports);

function whoIsThisInsideAFunction() {
  if (this === global) {
    console.log('inside functions the value of \'this\' is the global object');
  } else if (this === module) {
    console.log('inside functions the value of \'this\' is the module object');
  } else if (this === module.exports) {
    console.log('inside functions the value of \'this\' is the module.exports object');
  } else if (this === exports) {
    console.log('inside functions the value of \'this\' is the exports object');
  }
}

whoIsThisInsideAFunction()
