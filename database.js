const fs = require('fs'); //for database requirements

const save = function(filename, data){  
    fs.writeFileSync(filename, JSON.stringify(data));//files only understand strings, therefore we need to change data into a string
} 

const load = function(filename){
    return JSON.parse(fs.readFileSync(filename, 'utf8')); //utf8 ensures our return values not to be a  group of  ASCII values but a string.
}                                             //Finally we should  parse  return value for it become an object, a JSON specificly.                  

module.exports = {save, load};