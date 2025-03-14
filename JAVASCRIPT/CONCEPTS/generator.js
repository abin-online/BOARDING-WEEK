function* generator() {
    let i = 1
    while (true) {
        yield i * 3
        i++
    }
}

const generate = generator();
console.log(generate);

for (let value of generate) {
    console.log(value);
}

// function* generator(){
//     yield 1
//     for(let i=2;i<=6;i++){
//         let multipleNumber=Array(i).fill(i)
//         yield multipleNumber
//     }
// }
// const generate=generator()

// for (const value of generate) {
//     console.log(value);
// }
