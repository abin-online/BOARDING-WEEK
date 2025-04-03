//prevent delete

const user = {
    name: 'Abin',
    age: 23
}

const handler = {
    deleteProperty(target, property) {
        if(property == 'age'){
            console.log('cannot delete age');
        }else{
            delete target[property]
        }
        
    },
    get(target, property) {
        return target[property];
    }
}

Zzz
const safeUser =  new Proxy(user, handler)

console.log(safeUser.name)

delete safeUser.age;

console.log(safeUser)