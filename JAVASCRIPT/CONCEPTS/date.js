//date 15 days after today

const date = new Date()

date.setDate(date.getDate() + 15) 
console.log(date.toDateString())

const os = require('os')
console.log(os.cpus())

