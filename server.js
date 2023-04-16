// const form = document.getElementById("register");
// console.log("made it here");
// console.log(form);
// const form = document.getElementById("register");
// console.log(form);
// form.addEventListener((e) => {
//   e.preventDefault();
//   console.log("made it here");
// });
const express = require("express");
const app = express();
const port = 2000;
const path = require("path");
app.use(express.static(path.join(__dirname + "/client")));
const axios = require("axios");

let testUsers = [
  { username: "Bex", password: "chad", email: "bex@chad.com" },
  { username: "Naman", password: "Im a nerd", email: "Naman@nerd.ca" },
  { usernmae: "Tosia", password: "omgNerd5000", email: "bigNerd@nerd.ca" },
];

// console.log(testUsers);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/pages/loginPage.html"));
});
app.get("/loginPage.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/pages/loginPage.html"));
});
app.get("/register.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/pages/register.html"));
});
app.get("/mainPage.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/pages/mainPage.html"));
});
app.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/pages/about.html"));
});
app.get("/getUserData", (req, res) => {
  let obj = testUsers;
  res.send(JSON.stringify(obj));
});
app.post("/registerUser", (req, res) => {
  const data = JSON.parse(req.response);
  res.send("hallo");
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
