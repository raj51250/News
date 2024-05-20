const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/news");
const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongo DB Connection Successfull");
});

connection.on("error", () => {
  console.log("Mongo DB Connection Failed");
});

module.exports = mongoose;
