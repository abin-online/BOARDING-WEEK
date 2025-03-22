const express = require('express');

const app = express()


const blockRoute = (req, res, next) => {
    try {
        if (req.url == '/block') {
            return res.status(403).json({ message: 'blocked' })
        } 
            next()
    } catch (error) {

    }
}

app.use(blockRoute)

app.get('/block', (req, res) => {
    try {
        res.send('Route accessed successfully')
    } catch (error) {
        console.log(error)
    }
})

app.listen(3000, () => console.log('connected'))