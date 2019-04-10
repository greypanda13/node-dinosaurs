var express = require("express");
var router = express.Router();

// data stuff
var fs = require("fs");
var cryptidData = fs.readFileSync("./cryptids.json");
cryptidData = JSON.parse(cryptidData);

// index (/) GET
router.get("/", (req, res) => {
  console.log("hit index");
  res.render("cryptids/index", { myCryptid: cryptidData });
});

// new (/new) GET
router.get("/new", (req, res) => {
  console.log("hit new");
  res.render("cryptids/new");
});

// create (/) POST
router.post("/", (req, res) => {
  console.log(req.body);
  cryptidData.push(req.body);
  fs.writeFileSync("./cryptids.json", JSON.stringify(cryptidData));
  res.redirect("/cryptids");
});

// show (/:id) GET
router.get("/:id", (req, res) => {
  console.log("hit show");
  // get array index from the request
  var dinoIndex = parseInt(req.params.id);
  res.render("cryptids/show", { myCryptid: cryptidData[cryptidIndex] });
});

// edit (/edit/:id) GET
router.get("/edit/:id", (req, res) => {
  console.log("hit edit");
  res.render("cryptids/edit");
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
