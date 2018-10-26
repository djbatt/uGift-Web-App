const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config()

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);
console.log(process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
