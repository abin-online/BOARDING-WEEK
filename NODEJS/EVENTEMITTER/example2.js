const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {

}

const myEmitter = new CustomEmitter();

myEmitter.on('greet', (name)=> {
    console.log(`Hello ${name} !`)
})

myEmitter.emit('greet', 'Abin')