const express = require("express");
const fs = require("fs");
var uniqid = require('uniqid'); 
var cors = require('cors')

const app = express();

app.use(express.json());

app.use(cors())


app.get("/getdata", (req, res) => {

  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      // res.send(data)
      const newdata = JSON.parse(data);
      res.send(JSON.stringify(newdata));
    }
  });
});

app.post("/addproduct", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      const newdata = JSON.parse(data);
      req.body.id=uniqid()
      newdata.push(req.body);
      
      fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Data Added....");
        }
      });
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      let newdata = JSON.parse(data);
      newdata = newdata.filter((el) => el.id != id);

      fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Data Deleted....");
        }
      });
    }
  });
});

app.patch("/update/:id", (req, res) => {
  const { id } = req.params;

  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send(err);
    } else {
      let newdata = JSON.parse(data);
      let index = newdata.findIndex((el) => el.id == id);


      if (index != -1) {
       
        newdata[index] = { ...newdata[index], ...req.body };
        
        fs.writeFile("./db.json", JSON.stringify(newdata), (err) => {
          if (err) {
            res.send(err);
          } else {
            res.send("product updated");
          }
        });
      } else {
        res.send("product not found");
      }
    }
  });
});


app.get("/getsingledata/:id", (req, res) => {
  const {id} = req.params
 
  fs.readFile("./db.json","utf-8",(err,data)=>{
   if(err){
     res.send(err)
   }
   else{
     const newdata=JSON.parse(data)
     const [product]=newdata.filter((el)=>el.id==id)
 
     if(product)
     {
       res.send(product)
     }
     else
     {
       res.send("Product Not Found")
     }
   }
  })
 });

app.listen(8080, () => {
  console.log("server is running on port 8080");
});
