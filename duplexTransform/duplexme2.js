const {Transform} = require('stream');

const uppercaseTr = new Transform(
    {
        transform(chunk,encoding,callback) {
            this.push(chunk.toString().toUpperCase());
            callback();
        }
    }
)


process.stdin.pipe(uppercaseTr).pipe(process.stdout);

// implemented a transform() method. In that method, we convert the 
//chunk into its 
//upper case version and then push that version as the readable part.