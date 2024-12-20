const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/practicedb");
const userschema =mongoose.Schema({
    username: String,
    name: String,
    email: String
})

//collection ("name of collection", schema)
module.exports = mongoose.model("user", userschema);
console.log("databse Connected");