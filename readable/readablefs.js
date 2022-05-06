const fs = require('fs');

const readStream = fs.createReadStream('web.mp4');

readStream.on('data',(chunk)=>{
    console.log('Little chunk\n', chunk.length);
})

readStream.on('end',()=>{
    console.log('read stream ended')
})

readStream.on('error',(err) =>{
    console.log('an error has occured');
    console.log(err)
})

readStream.pause() // read stream now is on paused mode

// process.stdin.on('data', (chunk)=>{
//     let text = chunk.toString().trim();
//     console.log(`echo: ${text}`);
// })


process.stdin.on('data', (chunk)=>{
    if(chunk.toString().trim() === 'finish') {
        readStream.resume()
        //when we type finish instead of getting the data chunk by chunk
        //we get everything this is because the resume method
        // makes the stream go into flowing mode
    }
  readStream.read()//unpusing the readstream
  //so everytime we get input from the stdin which is our keyboard  a chunk of data 
  //will be read from the stream
})