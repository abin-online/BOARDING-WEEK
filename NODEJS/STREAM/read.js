const fs = require('fs');

const readableStream = fs.createReadStream('text.txt');

readableStream.on('data', (chunk)=> {
    console.log(chunk.toString())
})