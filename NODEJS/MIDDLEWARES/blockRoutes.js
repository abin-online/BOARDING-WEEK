const express = require('express');


const app = express()


const blockGET = (req, res, next) => {
    if (req.method === 'GET') {
        res.status(403).json({ message: 'access blocked ' })
        return
    }
    next()
}


// app.use(blockGET);

app.get('/user', async (req, res) => {
    try {
        res.send('Hi user')
    } catch (error) {
        console.log('Error occured', error)
    }
}
)

app.get('/abin' , async (req, res)=> {
    try {
        res.send(req.originalUrl.split('/')[1])
    } catch (error) {
        
    }
})


app.listen(3000, ()=> {
    console.log('app is runnning')
})