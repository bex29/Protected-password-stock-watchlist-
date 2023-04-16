const loginForm = document.getElementById("loginForm");

let testUsers = [];

var request = new XMLHttpRequest();
request.open("GET", "http://localhost:2000/getUserData");
request.onload = function () {
  var resp = JSON.parse(request.response);
  testUsers = resp;
};
request.send();

function checkUserEmailPassword(oneEmail, onePassword) {
  console.log("funcition lol");
  for (let i = 0; i < testUsers.length; i++) {
    //console.log("executed the for loop");
    console.log(testUsers[i].email, oneEmail);
    if (oneEmail == testUsers[i].email) {
      console.log("executed the if statement");

      if (testUsers[i].password == onePassword) {
        console.log("executed the second if statement");
        return true;
        //window.location.href = "../pages/mainPage.html";
      }
    } //else {
    //   console.log("executed the else statement");
    //   //window.location.href = "../pages/testPage.html";
    // }
  }
  return false;
  //window.location.href = "../pages/testPage.html";
}

loginForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const passwordMessage = document.getElementById("wrongMessage");
  const borderWrong1 = document.getElementById("wrongBorder1");
  const borderWrong2 = document.getElementById("wrongBorder2");

  console.log(email, password);
  if (checkUserEmailPassword(email, password)) {
    window.location.href = "../pages/mainPage.html";
  } else {
    passwordMessage.textContent = "Incorrect email or password";
    passwordMessage.style.color = "red";
    passwordMessage.style.fontWeight = "500";
    passwordMessage.style.margin = "-15px 0 15px ";
    borderWrong1.style.borderColor = "red";
    borderWrong2.style.borderColor = "red";
  }
});
