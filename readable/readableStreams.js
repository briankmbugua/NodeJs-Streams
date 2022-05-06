const  {Readable} = require('stream')
const advices = [
    "No ice for drinks? Use frozen vegatables",
    "if you feel alone, watch horror movie before going to bed. You won't feel alone anymore",
    "Don't have sex after chopping onions",
    "If you can't blind them with brilliance, baffle them with nonsense",
    "Always borrow money from a pessisimist, they won't expect it back"
]


class StreamFromArray extends Readable {

    constructor(array){
        super({encoding: 'utf-8'});
        this.array = array;
        this.index = 0;
    }
    _read() {
        if(this.index <= this.array.length){
            const chunk = this.array[this.index];
            this.push(chunk)
            this.index += 1; 
        } else this.push(null)
    }
}


const adviceStream = new StreamFromArray(advices);

//you can use the data event of the readable stream to get data
// adviceStream.push(advices.toString())
adviceStream.on('data', (chunk) => console.log(chunk))

adviceStream.on('end', ()=> console.log('done'));


//you can also use the pipe method to get the data
// adviceStream.pipe(process.stdout)







// const fileSystem = require("fs");
// var data = "";
//whEN USING THE fs,createReadstream method the read method is automatically created
//and implemented
// const readStream = fileSystem.createReadStream('advices.txt');

// readStream.setEncoding("UTF8");

// readStream.on("data", (chunk) => {
// 	data += chunk;
// });

// readStream.on("end", () => {
// 	console.log(data);
// });

// readStream.on("error", (error) => {
// 	console.log(error.stack);
// });