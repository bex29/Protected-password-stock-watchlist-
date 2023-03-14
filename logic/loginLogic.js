const loginForm = document.getElementById("loginForm");

let testUsers = [
  { username: "Bex", password: "chad", email: "bex@chad.com" },
  { username: "Naman", password: "Im a nerd", email: "Naman@nerd.ca" },
  { username: "Tosia", password: "omgNerd5000", email: "bigNerd@nerd.ca" },
];

console.log("MADE IT HERE");

function checkUserEmailPassword(oneEmail, onePassword) {
  console.log("funcition lol");
  for (let i = 0; i < testUsers.length; i++) {
    //console.log("executed the for loop");
    console.log(testUsers[i].email, oneEmail);
    if (oneEmail == testUsers[i].email) {
      console.log("executed the if statement");

      if (testUsers[i].password == onePassword) {
        console.log("executed the second if statement");
        window.location.href = "../pages/mainPage.html";
      }
    } else {
      console.log("executed the else statement");
      //window.location.href = "../pages/testPage.html";
    }
  }
}

loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  checkUserEmailPassword(email, password);
});
