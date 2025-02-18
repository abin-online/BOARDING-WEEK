function fetchData(url, callback) {
    setTimeout(()=> {
        const err = Math.random() > 0.5
        if(err) {
            callback(err, null)
        }else{
            const data =  `Adi mone pookkutti 🎉`
            callback(null, data)
        }
    }, 2000)
}

fetchData('www.atomica.live', (err, response)=> {
    if(err){
        console.log(`Error in fetching data`)
    }else{
        console.log(`Data fetched successfully : ${response}`)
    }
})