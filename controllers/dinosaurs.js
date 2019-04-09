var express = require("express");
var router = express.Router();

// data stuff
var fs = require("fs");
var dinoData = fs.readFileSync("./dinosaurs.json");
dinoData = JSON.parse(dinoData);

// index (/) GET
router.get("/", (req, res) => {
  console.log("hit index");
  res.render("dinosaurs/index", { myDinos: dinoData });
});

// new (/new) GET
router.get("/new", (req, res) => {
  console.log("hit new");
  res.render("dinosaurs/new");
});

// create (/) POST
router.post("/", (req, res) => {
  console.log(req.body);
  res.redirect("/dinosaurs")
});

// show (/:id) GET
router.get("/:id", (req, res) => {
  console.log("hit show");
  // get array index from the request
  var dinoIndex = parseInt(req.params.id);
  res.render("dinosaurs/show", { myDino: dinoData[dinoIndex] });
});

// edit (/edit/:id) GET
router.get("/edit/:id", (req, res) => {
  console.log("hit edit");
  res.render("dinosaurs/edit");
});

// // update (/:id) PUT/POST
// router.get("/:id", (req, res) => {
//   console.log("hit update");
//   res.send("update");
// });

// // destroy (/delete/:id) DELETE
// router.get("/delete/:id", (req, res) => {
//   console.log("hit destroy");
//   res.send("destroy");
// });

module.exports = router;
