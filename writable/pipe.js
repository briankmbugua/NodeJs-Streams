const {createReadStream, createWriteStream} = require('fs');

const readStream = createReadStream('web.mp4')

const writeStream = createWriteStream('copy.mp4')

readStream.pipe(writeStream).on('error',console.error);

//any readstream can be piped to any writestream
