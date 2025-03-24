const express = require('express');
const app = express();


const middleware = (req, res, next)=> {
    try {
        if(req.headers.role === 'user'){
            next()
        }else{
            res.status(403).json({message: 'Forbidden'})
        }
    } catch (error) {
        console.log(error)
    }
}

app.use(middleware)

app.post('/users', (req, res)=> {
    try {
        res.status(201).json({message : 'user created'})
    } catch (error) {
        console.log(error)
    }
})

app.listen(3333, ()=> {
    console.log('connected !')
})