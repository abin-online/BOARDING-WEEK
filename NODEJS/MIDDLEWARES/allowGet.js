const express = require('express');

const app = express()


const allowGET = (req, res, next) => {
    try {
        if (req.method === 'GET') {
            next()
        } else {
            res.status(403).send('Method blocked')
        }
    } catch (error) {
        console.log(error)
    }
}

app.use(allowGET)

app.get('/', (req, res) => {
    try {
        res.send('GET Method')
    } catch (error) {

    }
})


app.post('/users', (req, res) => {
    try {
        res.send('POST method')
    } catch (error) {

    }
})

app.listen(3000, () => console.log('connected'))