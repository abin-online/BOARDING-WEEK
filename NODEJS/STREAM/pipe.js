const fs = require('fs');

const readableStream = fs.createReadStream('text.txt', 'utf-8');

const writableStream = fs.createWriteStream('copy.txt');

readableStream.pipe(writableStream)

console.log('copied !')
