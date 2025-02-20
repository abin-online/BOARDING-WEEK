function fetchData(callback) {
    setTimeout(() => {
      callback("Data received");
    }, 1000);
  }

  
  function fetchData() {
        return new Promise((resolve)=> {
            setTimeout(()=> {
                resolve("Data received")
            }, 1000)
        })
  }

  async function fetchDataResult() {
    try {
        const result = await fetchData();
    console.log(result)
    } catch (error) {
        console.error('Error fetching data' , error)
    }
  }

  fetchDataResult()