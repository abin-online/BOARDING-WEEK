const express = require('express')
const app = express()

const logging = (req, res, next)=> {
    try {
        console.log(`${req.method} ${req.url} ${new Date()}`);
        next()
    } catch (error) {
        console.log(error)
    }
}

app.use('/api', logging)

app.get('/api/users', (req, res)=> {
    res.send('Hello')
})

app.listen(3000, ()=> console.log('connected'))