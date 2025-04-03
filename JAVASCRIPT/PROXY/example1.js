const user = {
    name: "Abin",
    age: 24
};

const handler = {
    get(target, property) {

        console.log(`Accessed property '${property}':`, target[property]);
        return target[property]; 
    },

    set(target, property, value) {
        console.log(`Property '${property}' was changed to '${value}'`);
        if(value > 27){
            return false
        }
        target[property] = value;
        return true;
    }
};

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.name); 
proxyUser.age = 29; 
console.log(proxyUser.age)
