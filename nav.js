const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("Welcome to my home page.");
});

app.get("/about", (req, res) => {
  res.status(200).send("Welcome to my ABOUT PAGE.");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to my CONTACT PAGE.");
});

app.get("/temp", (req, res) => {
  res.send("Welcome to my TEMP PAGE.");
});

app.listen(port, () => {
  console.log(`Listening to the port: ${port}`);
});
