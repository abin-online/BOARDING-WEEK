const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {

}

const myEmitter = new EventEmitter()

const greet = (name)=> {
    console.log(`Good Morning ${name} !`)
}


myEmitter.on('wish', greet);

myEmitter.emit('wish', 'Abin')

myEmitter.removeListener('wish', greet);

myEmitter.emit('wish', 'Anu')