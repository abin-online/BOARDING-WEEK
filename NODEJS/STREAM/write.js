const fs = require('fs');

const writableStream = fs.createWriteStream('text.txt');


writableStream.write('Hello, Abin! \n 🚀');

//writableStream.end(() => console.log('Finished !'))