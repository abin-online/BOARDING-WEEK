const fs = require('fs');

fs.unlink('file1.txt', (err)=> {
    if(err) {
        console.log(err)
    }
})