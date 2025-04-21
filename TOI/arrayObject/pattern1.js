const abc = [
    { a: 2, b: 4 },
    { a: 1, b: 3 },
    { a: 3, b: 6 }
]

// 2^4+4*2
// 1^3+3*1
// 3^6+6*3

function generatePattern(abc) {
    for (let element of abc) {
        let result = ''
        const { a, b } = element;
        result += `${a}^${b}`;
        result += '+'
        result += `${b}*${a}`;
        console.log(result)
    }
}
generatePattern(abc)
