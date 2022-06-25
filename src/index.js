const path = require("path");
const express = require("express");
const app = express();
const port = 8000;
const staticPath = path.join(__dirname, "../public");

// built-in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello Server");
});

app.listen(port, () => {
  console.log(`Listening to the port: ${port}`);
});
