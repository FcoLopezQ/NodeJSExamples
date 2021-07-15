var bandas = require("./bands.js");

var search = process.argv[2];
console.log(search)

for (const banda in bandas) {
    
    
    if (banda === search){
        console.log(`${banda}: ${bandas[banda]}`);
    }
    
  
}