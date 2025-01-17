const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './upload')
  },
  filename: function(req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`)
  }
})

const upload = multer({storage}).single('arquivo')

app.use(express.static('.'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


app.post('/upload', (req, res) => {
  upload(req, res, err => {
    if(err) {
      return res.end('Ocorreu um erro')
    }

    res.end('Upload concluído')
  })
})

app.post('/formulario', (req, res) => {
  res.send({...req.body, id: 1})
})

app.get('/parOuImpar', (req, res) => {
  //req.body - parametros do corpo do request
  //req.query - parametros de queryString
  //req.params  parametro de url

  const par = parseInt(req.query.numero) % 2 === 0

  res.send({
    resultado: par ? 'par' : 'impar'
  })
})

app.get('/teste', (req, res) => {
  res.send('OK')
})

app.listen(8080, () => console.log('Runing...'))
