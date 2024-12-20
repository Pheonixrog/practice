const express = require("express");
const app = express();

//ejs setup
// npm i ejs
// configure ejs
// app.set('view engine', 'ejs');
// make a views folder , and make ejs files in it
// use render in place of send 

app.set("view engine", "ejs");

//to serve static files
app.use(express.static("./public"));

//always takes a function(middleware)
app.use(function (req, res, next) {
  // console.log(res);
  next();
});

//get function
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ejs",(req,res)=>{
  res.render("index");
  //res.render("index", {name:"Rishabh"});
  //<%= name%>
});

// profile/:username (dynamic routing  )
app.get("/profile/:username", (req, res) => {
  console.log(req.params.username);
  // res.send('Hello World! ' + req.params.username);
  res.send(`hello ${req.params.username}`);
});

// port configuration
app.listen(3000);
console.log("Example app listening on port 3000!");



// static file setup 
// 1) create a folder called public
// 2) create three folders inside it iamges , scripts , css
// 3) congigure express to serve static files
// 4) understand the path



//error handling 
// go on google and use error handling code 




