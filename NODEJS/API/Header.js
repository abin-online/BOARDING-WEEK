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
        next(error)
    }
}

const blockPUT = (req, res, next) => {
    try {
        if(req.method == 'PUT'){
            res.status(403).json({message: 'PUT is blocked'})
        }else{
            next()
        }
    } catch (error) {
        next(error)
    }
}

app.use(middleware)
app.use(blockPUT)

app.post('/users', (req, res)=> {
    try {
        res.status(201).json({message : 'user created'})
    } catch (error) {
        next(error)
    }
})


app.use((err, req, res, next)=> {
    console.log(err);
    res.status(500).json({message:'Internal server error'})
})


app.listen(3333, ()=> {
    console.log('connected !')
})