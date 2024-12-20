var express = require("express");
var router = express.Router();
const users = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

//CURD operations

// .get karo , .create se scema create karo , async await karo
router.get("/create", async (req, res) => {
  await users.create({
    username: "Rishabh",
    name: "Rishabh",
    email: "Rishabh@gmail.com",
  });
  console.log("Created");
});

//read
router.get("/find", async function (req, res) {
  let allusers = await users.find();
  console.log(allusers);
});

//delete
router.get("/delete", async function (req, req) {
 let d = await users.findOneAndDelete({ username: "Rishabh" });
 console.log(d);
});

module.exports = router;
