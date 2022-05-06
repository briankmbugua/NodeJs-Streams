const {createReadStream, createWriteStream} = require('fs');

const readStream = createReadStream('web.mp4')

const writeStream = createWriteStream('copy.mp4',{
    highWaterMark: 1000000
})

readStream.on('data',(chunk)=> {
   const result = writeStream.write(chunk)//this is going to return false if it's full
   if(!result) {
       console.log('backpressure');
       readStream.pause()
   }
})

readStream.on('error',(err)=> {
    console.log('An error has aoccured');
    console.error(err);
})

readStream.on('end',()=> {
    writeStream.end();
})

writeStream.on('drain', () =>{
    console.log('drained');
    readStream.resume()
})

writeStream.on('close',()=>{ 
    process.stdout.write('file copied \n')
})