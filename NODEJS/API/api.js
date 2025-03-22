const express = require('express')
const app = express()

const users = [{
    _id: 1, name: 'Anu', place: 'Banglore'
}]


app.use(express.json())

//middleware to block GET req

const blockGET = (req, res, next)=> {
    try {
        if(req.method == 'GET'){
            res.status(403).json({message: 'GET BLOCKED'})
            return
        }
        next()
        console.log(req.method)
    } catch (error) {
        console.log(error);
    }
}

app.use(blockGET)


app.get('/', (req, res) => {
    res.json({ users })
})

app.post('/user', (req, res) => {
    const newUser = {
        _id: users.length + 1,
        name: 'Abin',
        place: 'Chennai'
    }
    users.push(newUser)
    res.json({ message: 'User created successfully' })
})

app.get('/user/:userId', (req, res) => {
    const { userId } = req.params;
    const _user = users.find((x) => x._id == userId);
    res.json({ _user })
})

app.listen(3000, () => {
    console.log('Server is running');
})