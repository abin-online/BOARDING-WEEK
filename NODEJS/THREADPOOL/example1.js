const crypto = require('crypto');

const start = Date.now();
crypto.pbkdf2Sync('password','salt', 100000, 512, 'sha512');
crypto.pbkdf2Sync('password','salt', 100000, 512, 'sha512');
crypto.pbkdf2Sync('password','salt', 100000, 512, 'sha512');
crypto.pbkdf2Sync('password','salt', 100000, 512, 'sha512');

console.log('hash: ', Date.now() - start);

//block the main thread
