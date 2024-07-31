const express = require("express");

const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to mongo...."))
  .catch((error) => console.log(error));

app.listen("3000", () => {
  console.log("Hello I am server and I am running fine .....");
});
