const { fork } = require('child_process');

const child = fork('./child.js');

child.send('Hi parent')