// 🧠 Challenge: Sequential API Calls with Promises
// You have two asynchronous functions that fetch user details 
// and their orders. Convert them to use Promises and then call
//  them sequentially using async/await.

function getUser(userId, callback) {
    setTimeout(() => {
      callback({ id: userId, name: "Abin" });
    }, 1000);
  }
  
  function getOrders(userId, callback) {
    setTimeout(() => {
      callback(["Order 1", "Order 2"]);
    }, 1000);
  }

  
  //PROMISE

function getUser(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: userId, name: "Abin" })
        }, 1000)
    })
}

function getOrders() {
    return new Promise((resolve, reject)=> {
        let _ERROR = Math.random() > 0.5
        setTimeout(() => {
            if(_ERROR){
                reject('random Error occured')
            }
            resolve(["Order 1", "Order 2"]);
        }, 1000)
    })
}

//PROMISE CHAINING
// getUser(1).then((result1) => {
//     getOrders()
//     .then((result2) => {
//         console.log(result1, result2)
//     }).catch((err) => {
//         console.log(err)
//     });
// }).catch((err) => {
//     console.log(err)
// });

//ASYNC AWAIT
async function getUserAndOrder(params) {
    try {
        const user = await getUser(1);
        let orders;
        try {
            orders = await getOrders();
            console.log(user, orders)
        } catch (error) {
            try {
                console.log('1st attempt failed', error);
                orders = await getOrders();
            } catch (error) {
                console.error('2nd attempt also failed')
            }
            orders = 'No orders'
        }
        console.log('Result', user, orders)
    } catch (error) {
        console.error('Avlo dhaa, onnum panna mudiyaath', error)
    }

}
getUserAndOrder()
