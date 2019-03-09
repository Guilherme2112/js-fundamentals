const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const fetchChinese = worker => worker.pais === 'China'
const fetchWomen = worker => worker.genero === 'F'
const fetchLowestSalary = (worker, otherWorker) => {
  return worker.salario < otherWorker.salario ? worker : otherWorker
}

axios.get(url)
  .then(response => response.data)
  .then(workers => workers.filter(fetchChinese))
  .then(chineseWorkers => chineseWorkers.filter(fetchWomen))
  .then(femaleChineseWorkers => femaleChineseWorkers.reduce(fetchLowestSalary))
  .then(lowestSalaryFemaleChineseWorker => console.log(lowestSalaryFemaleChineseWorker))
