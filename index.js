const fs = require('fs');
fs.appendFile('file1.txt', 'Hai Hello jhikerhf ', (err)=> {
    if(err) {
        console.log(err)
    }
})