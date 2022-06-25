const path = require("path");
const express = require("express");
const app = express();

// realtive path
// console.log(__dirname);

// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");

// built-in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/about", (req, res) => {
  res.send("Hello from about");
});

app.listen(8000, () => {
  console.log("Listening to port at :8000");
});
