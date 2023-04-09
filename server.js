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
const port = 420;
const path = require("path");
app.use(express.static(path.join(__dirname + "/client")));

let testUsers = [
  { username: "Bex", password: "chad", email: "bex@chad.com" },
  { username: "Naman", password: "Im a nerd", email: "Naman@nerd.ca" },
  { usernmae: "Tosia", password: "omgNerd5000", email: "bigNerd@nerd.ca" },
];

function checkPassword(password) {
  if (password.length < 8) {
    // window.location.href = "../pages/testPageLogin.html";
    console.log("password is less than 8");
    return false;
  }
  return true;
}

// const form = document.getElementById("form");
// console.log("made it");
// form.addEventListener("submit", (ev) => {
//   ev.preventDefault();
//   let username = document.getElementById("username").value;
//   let password = document.getElementById("password").value;
//   let email = document.getElementById("email").value;
//   testUsers.push(username, password, email);
//   window.location.href = "../pages/loginPage.html";
//   console.log(testUsers);

//   if (!checkPassword(password)) {
//     document.getElementById("password").className = "test";
//   }
// });

// console.log(testUsers);

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
app.get("/test", (req, res) => {
  res.send("Hello World! Testing");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
