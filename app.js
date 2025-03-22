const app = express()


const middleware = async (req, res) => {
    try {
        const { data } = req.body;

        req.body.data = encodeURIComponent(data);

    } catch (error) {
        
    }
}


app.use(middleware)


app.post('/user', () => {
    try {
        
    } catch (error) {
        
    }
})