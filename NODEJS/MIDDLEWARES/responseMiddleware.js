const express = require('express');

const app = express()

const crypto = require('crypto');

const SECRET_KEY = "abcdefghijklmnop";
const IV = "1234567890123456";

function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-128-cbc', SECRET_KEY, IV);
    let encrypted = cipher.update(text, 'utf-8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

const encryptResponse = (req, res, next) => {
    const originalSend = res.send;
    res.send = function(data) {
        if(typeof data === 'object') {
            data = JSON.stringify(data);
        }

        const encryptedData = encrypt(data);
        originalSend.call(this, encryptedData);
    }

    next()
}

app.use(encryptResponse)

app.get('/', (req, res)=> {
    res.send({message: 'RESPONSE'})
})

app.listen(3000, ()=> {
    console.log('Connected !')
})