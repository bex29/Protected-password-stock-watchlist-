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
    console.log("password is less than 8");
    return false;
  } else {
    return true;
  }
}

function matchPasswords(password, passwordConfirm) {
  if (password === passwordConfirm) {
    return true;
  } else {
    return false;
  }
}

function isValidEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function checkLen(username) {
  if ((username = "")) {
    return false;
  } else {
    return true;
  }
}

// function matchPasswords(inputOne, inputTwo) {
//   if (inputTwo.value === "") {
//     showWrong(inputTwo, "You can't do empty bro");
//   } else if (inputOne.value === inputTwo.value) {
//     showRight(inputTwo);
//   } else {
//     showWrong(inputTwo, `passwords must match`);
//   }
// }

function checkLowerCapitalCase(input) {
  var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{8,25}$/;
  return String(input).match(regularExpression);
}

const form = document.getElementById("form");
console.log("made it");

// function that displays wrong message and styling
form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  let usernameRegister = document.getElementById("username").value;
  let passwordRegister = document.getElementById("password").value;
  let passwordConfirmRegister =
    document.getElementById("passwordConfirm").value;
  let emailRegister = document.getElementById("email").value;

  const shortPassw = document.getElementById("shortPassw");
  const notMatching = document.getElementById("notMatching");
  const emailExist = document.getElementById("emailExist");
  const borderWrong1 = document.getElementById("wrongBorder1");
  const borderWrong2 = document.getElementById("wrongBorder2");
  const wrongBorderEmail = document.getElementById("wrongBorderEmail");

  // window.location.href = "../pages/loginPage.html";

  // const body = JSON.stringify({
  //   username: usernameRegister,
  //   password: passwordRegister,
  //   email: emailRegister,
  // });

  if (checkPassword(passwordRegister) == false) {
    //   // checks if passwors is correct lenght

    shortPassw.textContent = "Password must be at least 8 characters long";
    shortPassw.style.color = "red";
    shortPassw.style.fontWeight = "500";
    shortPassw.style.margin = "-15px 0 15px ";
    borderWrong1.style.borderColor = "red";
    borderWrong2.style.borderColor = "red";
  } else if (
    matchPasswords(passwordConfirmRegister, passwordRegister) == false
  ) {
    notMatching.textContent = "Passwords don't match";
    notMatching.style.color = "red";
    notMatching.style.fontWeight = "500";
    notMatching.style.margin = "-15px 0 15px ";
    borderWrong1.style.borderColor = "red";
    borderWrong2.style.borderColor = "red";
  } else {
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
  }
});
