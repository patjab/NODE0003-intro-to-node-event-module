const Logger = require('./logger').log
const logObj = new Logger()

logObj.on('helloWorld', (e) => {
  console.log(e.myData)
})
logObj.logMessage("hi pluto")
