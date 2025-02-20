// Auto-Generate Default Values (No More undefined)
// Example: If a property is missing, return a default value.

const defaultObject = new Proxy({}, {
    set(target, property, value){
        target[property] = value || `default-${property}`
    }
})

defaultObject.name = ''
console.log(defaultObject)