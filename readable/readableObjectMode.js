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
        super({objectMode: true});//setting the objectMode to true idicates that we don't just
        //want the data in string or binary
        //encoding: 'UTF-8 => CONVERTS BUFFER TO STRING
        this.array = array;
        this.index = 0;
    }
    _read() {//implementing the read method
        if(this.index <= this.array.length){
            const chunk = {
                data: this.array[this.index],
                index: this.index
            }
            this.push(chunk)
            this.index += 1; 
        } else this.push(null)
    }
}
const adviceStream = new StreamFromArray(advices);



adviceStream.on('data', (chunk) => console.log(chunk))

adviceStream.on('end', ()=> console.log('done'));