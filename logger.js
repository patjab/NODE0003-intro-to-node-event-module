const EventEmitter = require("events")

class Logger extends EventEmitter {
  logMessage(message) {
    console.log(message)
    this.emit('helloWorld', {myData: "really awesome data and hello world!"})
  }
}

exports.log = Logger
