const schedule = require('node-schedule')
const task1 = schedule.scheduleJob('*/5 * 00 * * 2', () =>{
  console.log('Executando tarefa 1!', new Date().getSeconds());
})

setTimeout(() => {
  task1.cancel()
  console.log('Task 1 cancelled');
}, 20000)

const rule = new schedule.RecurrenceRule()
rule.dayOfWeek = [schedule.Range(0, 6)]
rule.hour = 00
rule.minute = 12
rule.second = 20


const task2 = schedule.scheduleJob(rule, () =>{
  console.log('Executando tarefa 2!', new Date().getSeconds());
})
