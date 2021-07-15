var axios = require("axios");

axios.get("https://en.wikipedia.org/wiki/SpongeBob_SquarePants")

.then (function(response){
    console.log(response)
})