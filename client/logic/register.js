const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:2000/register.html");
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

let testUsers = [
  { username: "Bex", password: "chad", email: "bex@chad.com" },
  { username: "Naman", password: "Im a nerd", email: "Naman@nerd.ca" },
  { usernmae: "Tosia", password: "omgNerd5000", email: "bigNerd@nerd.ca" },
];

function showWrong(input, message) {
  const formControl = input.parentElement;
  formControl.className = "wrong";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showRight(input, message) {
  const formControl = input.parentElement;
  formControl.className = "right";
}
function checkPassword(password) {
  if (password.length < 8) {
    // window.location.href = "../pages/testPageLogin.html";
    console.log("password is less than 8");
    return false;
  }
  return true;
}
function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function checkLen(input, minimum, maximum) {
  if (input.value.length < minimum || input.value.length > maximum) {
    showWrong(input, "Please enter a decent sized input bro");
  }
}

function matchPasswords(inputOne, inputTwo) {
  if (inputTwo.value === "") {
    showWrong(inputTwo, "You can't do empty bro");
  } else if (inputOne.value === inputTwo.value) {
    showRight(inputTwo);
  } else {
    showWrong(inputTwo, `passwords must match`);
  }
}
function checkLowerCapitalCase(input) {
  var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{8,25}$/;
  return String(input).match(regularExpression);
}

const form = document.getElementById("form");
console.log("made it");
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  testUsers.push(username, password, email);
  window.location.href = "../pages/loginPage.html";

  const body = JSON.stringify({
    userId: 1,
    title: "Fix my bugs",
    completed: false,
  });
  xhr.send(body);
  console.log(testUsers);
});
