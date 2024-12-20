var express = require("express");
var router = express.Router();
const users = require("./users");

/* GET home page. */
// res.clearCookie("username");
router.get("/cookie", function (req, res, next) {
  res.cookie("username", "Rishabh");
  res.send(req.cookies);
  
})


router.get("/", function (req, res, next) {
  // req.session.username = true;
  res.render("index", { title: "Express" });
});
// req.session.destroy();
// console.log(req.session.username);

//CURD operations

// .get karo , .create se scema create karo , async await karo
router.get("/create", async (req, res) => {
  // console.log(req.session);
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
