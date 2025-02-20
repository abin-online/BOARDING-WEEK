const Person = {
    name: 'Abin',
    age: 23
}

const handler = {
    get(target, property) {
        console.log(`Accessed the property ${property} : ${target[property]}`);
        return target[property]
    },

    set(target, property, value) {
        console.log(`Value of property ${property} is changed from ${target[property]} to ${value}`)
        target[property] = value
        return true
    }
}

const proxyObject = new Proxy(Person, handler);

proxyObject.age = 24
console.log(proxyObject);
