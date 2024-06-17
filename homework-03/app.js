const express = require("express");
const app = express();

app.get("/", () => {
  console.log("get endpoint");
  res.send("Hello world.");
});

app.listen(3000, () => {
  console.log("I'm listening on 3000 port.");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});
