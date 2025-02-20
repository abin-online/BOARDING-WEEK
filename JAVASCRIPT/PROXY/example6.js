//prevent delete

const user = {
    name: 'Abin',
    age: 23
}
const safeUser =  new Proxy(user, {
    deleteProperty(target, property, value) {
        console.log(``);
        
    }
})