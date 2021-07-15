var fs = require("fs");

fs.writeFile("movies.txt", "SpongeBob: The Movie", function(err) {
    
    if (err){
        console.log(err);
    } else {
        console.log ("File updated");
    }

});