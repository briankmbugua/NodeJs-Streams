const {createReadStream, createWriteStream} = require('fs');

const readStream = createReadStream('web.mp4')

const writeStream = createWriteStream('copy.mp4')

readStream.on('data',(chunk)=> {
   writeStream.write(chunk)
})

readStream.on('error',(err)=> {
    console.log('An error has aoccured');
    console.error(err);
})

readStream.on('end',()=> {
    writeStream.end();
})

writeStream.on('close',()=>{
    process.stdout.write('file copied \n')
})