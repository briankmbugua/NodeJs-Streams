const { Stream } = require('stream');
const Streams = require('stream');

const readableStream = new Stream.Readable();
readableStream._read = () => {}
readableStream.push('hello world')

readableStream.push('Am brian')


readableStream.push(null)

// readableStream.on('data',(data)=>{
//     console.log(data.toString())
// })

readableStream.pipe(process.stdout)