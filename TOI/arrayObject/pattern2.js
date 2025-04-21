const abcArray = [
    { x: 2, y: 6 },
    { x: 3, y: 7 },
    { x: 4, y: 8 }
]

// 2*3*4*5*6 - 2+3+4+5+6
// 3*4*5*6*7 - 3+4+5+6+7
// 4*5*6*7*8 - 4+5+6+7+8

const generatePattern = (abc) => {
    for (let element of abc) {
        const { x, y } = element;
        let result = '';
        const star = (x, y) => {
            let subStr = ''
            for (let i = x; i <= y; i++) {
                subStr += `${i}`
                if (i == y) {
                    break;
                }
                subStr += `*`
            }
            return subStr
        }

        const plus = (x, y) => {
            let subStr = ''
            for (let i = x; i <= y; i++) {
                subStr += `${i}`
                if (i == y) {
                    break;
                }
                subStr += `+`
            }
            return subStr
        }

        result += `${star(x, y)} - ${plus(x, y)}`;
        console.log(result)
    }
}

generatePattern(abcArray)

