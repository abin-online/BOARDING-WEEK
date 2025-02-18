const fetchData = async(url)=> {
    const response = await fetch(url);
    const data = await response.json();
    return data
}

function fetchFunction(url , callback) {
    setTimeout(async()=> {
        const result = await callback(url);
        console.log(result)
    }, 2000)
}

const _URL = `https://jsonplaceholder.typicode.com/users`
fetchFunction(_URL, fetchData)