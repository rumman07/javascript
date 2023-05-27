let http = require("http");

let firstServer = http.createServer((req, res) =>{
  switch(req.url){
    case "/":
        res.end("Welcome to The Site!");
        break;
    case "/about":
        res.end("Well we will tell you everything about US!")
        break;
    default: 
        res.end("Can't find the requested page!")
        break;
  }
})

firstServer.listen(30000)

