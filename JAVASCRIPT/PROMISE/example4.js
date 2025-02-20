//RETRY MECHANISMS

function getUsers(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: 'Abin' })
        }, 1000)
    })
}

function getOrders() {
    return new Promise((resolve, reject) => {
        let _ERROR = Math.random() > 0.5;
        if (_ERROR) {
            reject('Random error occured')
        }
        resolve(['Order1', 'Order2'])
    })
}

function delay(attempt, ms){
    return new Promise((resolve)=> setTimeout(()=> {
        resolve()
    }, attempt * ms))
}

async function getUserAndOrder(max) {
    let maxAttempts = max
    let attempt = 0;
    let orders
    const user = await getUsers(1);
    while (attempt < maxAttempts) {
        try {
            orders = await getOrders();  
            break;  
        } catch (error) {
            attempt++
            console.log(`Attempt ${attempt} failed`);
            if(maxAttempts == attempt) {
                console.log(`${attempt} attempts failed`)
                orders = 'No orders available'
            }else{
                console.log(`${attempt*500}ms delay before retrying`)
                await delay(2 ** attempt, 500)
            }
        }
    }
    console.log(user, orders)
}

getUserAndOrder(3)