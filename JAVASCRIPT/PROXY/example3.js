//Read Only Proxy(Immutable Object)

const User = {
    name: 'Abin',
    place: 'Chettikulangara'
}

const handler = {
    set(target, property, value) {
        console.log(`Value of property ${property} is still ${target[property]}, not ${value}`);
        return false
    },
    get(target, property) {
        console.log(`Accessed the propert ${property} : ${target[property]}`);
        return target[property]
    }
}

const proxyUser = new Proxy(User, handler)

proxyUser.place = 'Chennai'
console.log(proxyUser.place)