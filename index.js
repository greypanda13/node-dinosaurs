var express = require("express");
var layouts = require("express-ejs-layouts");
var app = express();

app.set("view engine", "ejs");
app.use(layouts);
app.use("/", express.static("public"));

// add body parser
app.use(express.urlencoded({ extended: false }));

app.use("/dinosaurs", require("./controllers/dinosaurs"));
app.use("/cryptids", require("./controllers/cryptids"))

app.get("/", (req, res) => {
  res.render("home");
});

app.get("*", (req, res) => {
  res.send("error 404 boom dead")
})

app.listen(8000, () => {
  console.log("listening on port 8000");
});
