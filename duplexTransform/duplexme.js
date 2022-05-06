const  {Duplex}  = require('stream');

const inoutStream = new Duplex(
    {
        write(chunk,encoding,callback) {
            console.log(chunk.toString());
            callback()
        },
        read(size) {
            this.push(String.fromCharCode(this.currentCharCode++));
            if(this.currentCharCode > 90) {
                this.push(null);
            }
        }
    }
)

inoutStream.currentCharCode = 30


process.stdin.pipe(inoutStream).pipe(process.stdout);


// . We pipe the readable stdin stream 
// into this duplex stream to use the echo 
// feature and we pipe the duplex 
// stream itself into the writable stdout stream
//  to see the letters A through Z.