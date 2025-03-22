process.env.UV_THREADPOOL_SIZE = 5
const crypto = require('crypto');

const start = Date.now();
const MAX_CALLS = 5
for (let i = 0; i < MAX_CALLS; i++) {
    crypto.pbkdf2('password', 'salt', 100000, 512, 'sha512' , ()=> {
        console.log(`Hash ${i + 1} : ${Date.now() - start}`)
    });
}

// crypto.pbkdf2 is an async function that runs in Node.js's libuv thread pool.
// By default, the thread pool size is 4, meaning only 4 tasks can run in parallel.
// Setting UV_THREADPOOL_SIZE=5 increases the thread pool to 5, allowing all 5 hashes to run in parallel.

