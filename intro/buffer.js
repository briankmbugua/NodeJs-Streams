 let fs = require('fs');
 let http = require('http');
 let file = 'web.mp4';

 http.createServer((req,res)=>{
     fs.readFile(file, (error,data) => {
         if(error) {
             console.log(error)
         }
         res.writeHead(200, {'Content-Type': 'video/mp4'});
         res.end(data);
     })
 }).listen(3000, ()=> console.log('buffer - http://localhost:3000'))