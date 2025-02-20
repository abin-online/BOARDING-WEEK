//validation proxy
//Prevent setting negative ages or empty names

const user = {
    name: 'Abin',
    age: 23
}
const validateUser = new Proxy(user, {
    set(target, property, value) {
        if(property == 'name' && !value.trim()){
            console.log(`Cannot set empty values in string`);
            return false
        }
        if(property == 'age' && value < 0) {
            console.log(`Cannot set negatives values for age`);
            return false
        }
        target[property] = value
        return true
    },
})

validateUser.name = 'AB'
validateUser.age = -1

console.log(validateUser)

