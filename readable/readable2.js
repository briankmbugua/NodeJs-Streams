//To implement a readable stream,we require the Readble interface,and construct an object from it
//and implemt a read() method in the streams configuration parameter

const {Readable} = require('stream');

const instream = new Readable(
    {
        read(){}
    }
);


instream.push('ABCDEFGHIJKLM')
instream.push('NPQRSTUVWXYZ')
instream.push(null) //no more data

// instream.pipe(process.stdout) //piping to process.stdout

//you can also use the data event
instream.on('data',(data)=>console.log(data.toString()))