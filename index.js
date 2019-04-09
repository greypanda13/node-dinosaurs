var express = require("express");
var layouts = require("express-ejs-layouts");
var app = express();

app.set("view engine", "ejs");
app.use(layouts);

app.get("/", (req, res)=>{
  res.send("homepage");
});

app.listen(8000, ()=>console.log("listening on port 8000");
});
