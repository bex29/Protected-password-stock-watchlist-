const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:2000/registerUser");
xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

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
  let usernameRegister = document.getElementById("username").value;
  let passwordRegister = document.getElementById("password").value;
  let emailRegister = document.getElementById("email").value;
  window.location.href = "../pages/loginPage.html";

  const body = JSON.stringify({
    username: usernameRegister,
    password: passwordRegister,
    email: emailRegister,
  });
  xhr.onload = () => {
    console.log(xhr.response);
    if (xhr.readyState == 4 && xhr.status == 201) {
      console.log(JSON.parse(xhr.responseText));
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };
  xhr.send(body);
});
