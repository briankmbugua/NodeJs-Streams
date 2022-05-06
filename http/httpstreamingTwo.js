const { createServer } = require('http');
const {stat, createReadStream } = require('fs')
const {promisify} =require('util');
const filename = 'web.mp4';
const fileInfo = promisify(stat)

createServer().listen(5050, () => console.log('server running on port 5050')) 