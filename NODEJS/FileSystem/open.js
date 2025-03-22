const fs = require('fs')

fs.open('poda.txt', 'r',(err)=> {
    if(err){
        console.log(err);
        return
    }
    console.log('Opened');
    return
})