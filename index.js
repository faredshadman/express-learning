const express = require("express");
const app = express();
const { auth, people } = require("./routes");
// static assets
app.use(express.static("./methods-public"));
// parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// routes
app.use("/api/people", people);
app.use("/login", auth);

app.listen(5000, () => {
  console.log("SERVER IS LISTENING ON PORT 5000...");
});
