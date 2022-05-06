let fs = require('fs');
let http = require('http');
let file = 'web.mp4'


http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'video/mp4'});
    fs.createReadStream(file)
    .pipe(res)
    .on('error',console.error);
}).listen(3000, ()=> console.log('stream - http://localhost:3000'))