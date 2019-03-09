function createProduct(name, price){
  return {
    name,
    price,
    discount: 0.1
  }
}


x = createProduct('ipad', 2000)
y = createProduct('imac', 9999)
console.log(x)
console.log(y)
