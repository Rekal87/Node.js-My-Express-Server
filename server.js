const express = require("express");
const app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.send("<h1>Hello, World</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: nnamdi.b@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("Name: Nnamdi Echem <br> Age: 34 <br> Occupation: Web Developer");

});

app.get("/hobbies", function(req, res) {
  res.send("My hobbies are playing MMO games and writing code!");
})

app.listen(3000, function() {
  console.log("server started on port 3000.");
});