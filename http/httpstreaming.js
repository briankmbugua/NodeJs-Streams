const { createServer } = require('http');
const {stat, createReadStream } = require('fs')
const {promisify} =require('util');
const filename = 'web.mp4';
const fileInfo = promisify(stat)

createServer(async(req, res) => {
    const {size} = await fileInfo(filename);
    const range = req.headers.range;
    if(range){
        let [start,end] = range.replace(/bytes=/,'').split('-');
        start = parseInt(start,10);
        end = end ? parseInt(end,10): size-1;

        res.writeHead(206, {
            'Content-Range' : `bytes ${start}-${end}/${size}`,
            'Accept-Ranges':'bytes',
            'Content-Length': (start-end) + 1,
            'Content-Type': 'video/mp4'
        })
        createReadStream(filename, {start,end}).pipe(res);
    }else{
        res.writeHead(200, { 
            'Content-type': 'video/mp4',
            'Content-Length': size
    });
    createReadStream(filename).pipe(res);
    }


 
}).listen(5050, () => console.log('server running on port 5050')) 