const fs = require('fs')

fs.writeFile('poda.txt', 'hii', (err, data)=> {
    if(err){
        console.log(err);
        return
    }
    console.log('Data written successfully');

    fs.readFile('poda.txt', 'utf-8', (err, data)=> {
        if(err){
            console.log(err);
            return
        }
        console.log(data);
    })
} )