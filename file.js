import express from 'express'

const app = express()

const logger = (req, res, next)=> {
    console.log(req);
    next()
}

app.use(logger)

app.post('/', (req, res)=> {

})



const Cart = React.lazy(()=> import('/cart'));


<Suspense fallback={<>loading</>}> 
    <Cart/>
</Suspense>


min(root){
    if(!root.left){
        return root.value
    }else{
        return min(root.left)
    }
}


//boarding 2nd week review question