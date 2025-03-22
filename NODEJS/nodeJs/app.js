const express = require('express')


const app = express();


// app.get('/:name', (req, res)=> {
//     const {name} = req.params;
//     res.json({name})
// })

app.use(()=> {
    console.log('Hii')
})
app.listen(3000, ()=> {
    console.log(`Server running`);
})