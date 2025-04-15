const ab = [{a:1,b:3,c:-1},{a:2,b:4,c:0},{a:7,b:10,c:6}]


// 1+2+3*3+2+1+0+-1

// 2+3+4*4+3+2+1+0

// 7+8+9+10*10+9+8+7+6


for(let i of ab) {
    let start = i.a;
    let middle = i.b;
    let end = i.c;
    let result = []
    const increment = (k, m) => {
        for(let i = k; i <= m; i++ ) {
            result.push(i)
            result.push('+')
        }
    }

    const decrement = (k, m) => {
        for(let i = k; i >= m; i-- ) {
            result.push(i)
            result.push('+')
        }
    }

    increment(start, middle);
    result.pop()
    result.push('*')
    decrement(middle, end)
    result.pop()
    console.log(result.join(''))
}