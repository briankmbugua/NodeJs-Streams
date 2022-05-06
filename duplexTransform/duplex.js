const {Duplex,PassThrough} = require('stream');

const {createReadStream,createWriteStream} = require('fs');

const readStream = createReadStream('web.mp4');
const writeStream = createWriteStream('copy.mp4');

class Throttle extends Duplex {
    constructor(ms) {
        super();
        this.delay = ms;
    }

    _read(){}
    _write(chunk,encoding,callback){
        this.push(chunk);
        setTimeout(callback,this.delay);
    }
    _final() {
        this.push(null)
    }
}

const report = new PassThrough();
const throttle = new Throttle(100);

let total = 0;

report.on('data',(chunk)=>{
    total += chunk.length;
    console.log('bytes',total);
})

//we are using passThrough to demonstrate a duplex stream since it can
//be put in between a readstream and a writestream

readStream.pipe(throttle).pipe(report).pipe(writeStream);