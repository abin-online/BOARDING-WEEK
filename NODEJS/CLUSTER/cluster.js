const cluster = require('cluster');

const os = require('os')

if(cluster.isPrimary) {
    const cpuLength = os.cpus().length;
    for(let i = 0 ; i < cpuLength ; i++) {
        cluster.fork()
    }

    cluster.on('exit', (worker)=> {
        console.log('worker died');
        cluster.fork()
    })
}else {
    const http = require('http');

    http.createServer((req, res)=> {
        res.end(`Handled by worker ${process.pid}`)
    }).listen(3000);

    console.log(`Handled by worker ${process.pid}`)

}