const fs = require('fs');


fs.readFile('poda.txt','utf-8', (err, data)=> {
    if(err){
        console.log(err)
    }else{
        console.log(data.split(' ').includes('undo'))
    }
})