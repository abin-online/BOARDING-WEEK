const fs = require('fs')

fs.readFile('poda.txt', 'utf-8', (err, data)=> {
    if(err){
        console.log(err);
        return
    }
    console.log(data.split(' ').includes('you'));
})