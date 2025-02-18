//convert a string to uppercase using a callback

function toUpperCase(str){
    return str.toUpperCase()
}

function processInput(input, callback) {
    return callback(input)
}

//processinput is an higher order function, as it accepts a function as an argument

console.log(processInput('i am in boarding', toUpperCase))