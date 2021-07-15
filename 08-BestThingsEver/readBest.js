var fs = require("fs");


fs.readFile("best_things_ever.txt", "utf8",function(err,data){

    if(err){
        console.log(err);
    } else {
        var datos = data.split(',');

        for(const dato in datos){
            console.log(datos[dato]);
        }
        
        datos.forEach(element => {
            console.log(element);
        })

        //console.log(data);
    }

})