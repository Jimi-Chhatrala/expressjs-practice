const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.write("<h1>Welcome to my home page.</h1>");
  res.write("<h1>Welcome to my home page.</h1>");
  res.send();
  // res.send("Welcome to my home page.");
});

app.get("/about", (req, res) => {
  res.status(200).send("Welcome to my ABOUT PAGE.");
});

app.get("/contact", (req, res) => {
  res.send("Welcome to my CONTACT PAGE.");
});

app.get("/temp", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Jimi",
    },
    {
      id: 2,
      name: "John",
    },
    {
      id: 1,
      name: "Jule",
    },
  ]);
  // res.send("Welcome to my TEMP PAGE.");
});

app.get("/sendtemp", (req, res) => {
  res.send([
    {
      id: 1,
      name: null,
    },
    {
      id: undefined,
      name: "John",
    },
    {
      id: 1,
      name: undefined,
    },
  ]);
  // res.send("Welcome to my TEMP PAGE.");
});

// app.get("/temp", (req, res) => {
//   res.send([
//     {
//       id: 1,
//       name: "Jimi",
//     },
//     {
//       id: 2,
//       name: "John",
//     },
//     {
//       id: 1,
//       name: "Jule",
//     },
//   ]);
//   // res.send("Welcome to my TEMP PAGE.");
// });

app.listen(port, () => {
  console.log(`Listening to the port: ${port}`);
});
