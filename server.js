const express = require("express");
const app = express();
const port = 2000;
const path = require("path");
app.use(express.static(path.join(__dirname + "/client")));
app.use(express.json());
let storage = [
  { title: "test1", desc: "sucessful" },
  { title: "test server", desc: "i love coding" },
];
let testUsers = [
  { username: "Bex", password: "1234", email: "bex@gmail.com" },
  { username: "Naman", password: "4321", email: "Naman@gmail.com" },
  { usernmae: "Takhmina", password: "qwer", email: "Takhmina@gmail.com" },
];

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
app.get("/getStorage", (req, res) => {
  let file = storage;
  console.log(JSON.stringify(file));
  res.send(JSON.stringify(file));
});
app.post("/registerUser", (req, res) => {
  //const data = JSON.parse(req);
  //testUsers.push(data);
  let userData = req.body;
  //console.log(req.body);
  testUsers.push(userData);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
