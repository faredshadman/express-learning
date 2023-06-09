const express = require("express");
// external middleware
const morgan = require("morgan");
// my middlewares
const logger = require("./logger");
const authorize = require("./authorize");

const app = express();

// apply middlewares
// app.use([logger, authorize]);
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log("salam", req.user);
  res.send("Items");
});

app.listen(5000, () => {
  console.log("SERVER IS LISTENING ON PORT 5000...");
});
