const express = require('express');
const bcrypt = require('bcrypt')
const app = express();


const encryptor = (req, res, next)=> {
    try {
        if(res.json) {
            const originalJson = res.json;
            res.json = async(data) => {
                const hashedMessage = await bcrypt.hash(JSON.stringify(data), 10);
                originalJson.call(res, {encrypted : hashedMessage});
            };
        }
        next()
    } catch (error) {
        console.log(error)
    }
}

app.use(encryptor)

app.post('/', (req, res)=>{
    try {
        res.status(201).json({message: 'Successfully created'})
    } catch (error) {
        
    }
})

app.get('/', (req, res)=>{
    try {
        res.status(201).json({message: 'Successfully fectched'})
    } catch (error) {
        
    }
})

