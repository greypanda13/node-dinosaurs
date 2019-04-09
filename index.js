var express = require("express");
var layouts = require("express-ejs-layouts");
var app = express();

app.set("view engine", "ejs");
app.use(layouts);
app.use("/", express.static("public"));

app.get("/", (req, res)=>{
  res.render("home");
});

app.listen(8000, ()=>{
  console.log("listening on port 8000");
});
