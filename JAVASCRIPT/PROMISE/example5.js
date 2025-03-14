//calculate sum of 3 different function with 3 different execution time returns 3 different number


function first() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10)
        }, 1000)
    })
}

function second() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(20)
        }, 1500)
    })
}

function third() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(30)
        }, 1000)
    })
}

async function sum() {
    try {
        const [result1, result2, result3] = await Promise.all([first(), second(), third()])
        let sum = result1 + result2 + result3;
        console.log(sum)
    } catch (error) {
        console.error('Error occured', error)
    }
}

sum()