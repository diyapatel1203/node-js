const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if(req.url=="/home")
  {
    res.end("This is Home Page")
  }
  else if(req.url=="/about")
  {
    res.end("This is About Page")
  }
  else if(req.url=="/getproductdata"){
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err)
        {
            res.end("No Data")
        }
        else
        {
            const productdata = JSON.parse(data)
            res.end(JSON.stringify(productdata.products))
        }
    })
  }
  else if(req.url=="/user"){
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err)
        {
            res.end("No Data")
        }
        else
        {
          const productdata = JSON.parse(data)
          res.end(JSON.stringify(productdata.user))
        
        }
    })
  }
  else
  {
    res.end("Page Not Found");
  }
});

server.listen(8080, () => {
  console.log("Server is running on port 8080");
});

// http://localhost:8080
