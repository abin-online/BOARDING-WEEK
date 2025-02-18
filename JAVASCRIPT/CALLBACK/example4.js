function fetchData(url, callback) {
    setTimeout(() => {
        // Simulating an error condition
        const error = Math.random() > 0.5; // 50% chance of error

        if (error) {
            callback('Error during data fetch', null);
        } else {
            const data = `Response from ${url}`;
            callback(null, data);
        }
    }, 2000); // Simulates a 2-second delay
}

// Using the function
fetchData("https://api.example.com", (err, response) => {
    if (err) {
        console.error(err); // Error handling
    } else {
        console.log(response); // Success handling
    }
});