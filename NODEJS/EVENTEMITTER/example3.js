const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {

}

const myEmitter = new CustomEmitter();

myEmitter.on('data', (str)=> {
    console.log(str.toUpperCase())
})

myEmitter.on('data', (str)=> {
    console.log(str.toLowerCase())
})

myEmitter.emit('data', 'aBiN')