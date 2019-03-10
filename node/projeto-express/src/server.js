const port = 3000
const db = require('./database')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (_request, response) => {
  response.send(db.getProducts()) // Converter pra json
})

app.get('/produtos/:id', (request, response) => {
  response.send(db.getProduct(request.params.id))
})

app.post('/produtos', (request, response) => {
  const product = db.saveProduct({
    name: request.body.name,
    price: request.body.price
  })
  response.send(product)
})

app.put('/produtos/:id', (request, response) => {
  const product = db.saveProduct({
    id: request.params.id,
    name: request.body.name,
    price: request.body.price
  })

  response.send(product)
})

app.delete('/produtos/:id', (request, response) => {
  const product = db.removeProduct(request.params.id)
  response.send(product)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
})
