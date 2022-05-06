const {createReadStream, createWriteStream} = require('fs');

const writeStream = createWriteStream('file.txt');

process.stdin.pipe(writeStream);//piping to the file.txt
