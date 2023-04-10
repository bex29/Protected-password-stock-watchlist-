// const form = document.getElementById("register");
// console.log("made it here");
// console.log(form);
// const form = document.getElementById("register");
// console.log(form);
// form.addEventListener((e) => {
//   e.preventDefault();
//   console.log("made it here");
// });
const form = document.getElementById("register");
console.log("made it");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  window.location.href = "../pages/loginPage.html";

  if (!checkPassword(password)) {
    document.getElementById("password").className = "test";
  }
});

