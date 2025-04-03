const fs = require('fs');

const arr = ['file1.txt', 'file2.txt', 'file3.txt']

arr.forEach((element, index) => {
    const futureDate = new Date()
    futureDate.setDate(futureDate.getDate() + index)
    console.log(index)
    fs.writeFile(element, futureDate.toISOString(), (err) => {
        if (err) {
            console.error(err)
        }
    })
})
