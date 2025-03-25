const EventEmitter = require('events');


class CustomEmitter extends EventEmitter {

}

const myEmitter = new CustomEmitter()

myEmitter.once('login', (name)=> {
    console.log(`${name} logged in successfully !`)
})

myEmitter.emit('login', 'Abin')
myEmitter.emit('login', 'Anu')


//.once() to ensure an event is triggered only once.