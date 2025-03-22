const fs = require('fs');

fs.appendFile('poda.txt', '\n Sadhanam kayyil undo','utf-8', (err, data)=> {
    if(err){
        console.log(err);
        return
    }
    console.log('Appended');  
})