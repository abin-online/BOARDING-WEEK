const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {

}

const myEmitter = new CustomEmitter()

myEmitter.on('error', (err)=> {
    console.log(`Error occured ! ${err.message}`)
})

myEmitter.emit('error', new Error('Something went wrong'))