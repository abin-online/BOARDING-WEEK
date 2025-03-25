const EventEmitter = require('events');

class CustomEmitter extends EventEmitter {

}

const myEmitter = new CustomEmitter()



myEmitter.on('fetch', async(url)=> {
    try {
        const users = await fetch(url);
        const result = await users.json();
        console.log(result)
    } catch (error) {
        
    }
})

myEmitter.emit('fetch', `https://jsonplaceholder.typicode.com/users`)

//emit an event for data fetching