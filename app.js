const validate = () => {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const cpassword = document.getElementById("cpassword");

  checkUsername(username);
  checkEmail(email);
  checkPassword(password);
  checkMatchPassword(password, cpassword);
};

// ********username*********

const checkUsername = (username) => {
  const usernameError = document.getElementById("username-error");
  if (username.value.length > 7) {
    if (username.classList.contains("error")) {
      username.classList.replace("error", "success");
      usernameError.innerHTML = "";
    } else {
      username.classList.add("success");
    }
  } else {
    username.classList.add("error");
    usernameError.innerHTML = "username must be more than 8 length long";
  }
};

//   *********email********

const checkEmail = (email) => {
  const emailError = document.getElementById("email-error");
  if (
    email.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    if (email.classList.contains("error")) {
      email.classList.replace("error", "success");
      emailError.innerHTML = "";
    } else {
      email.classList.add("success");
    }
  } else {
    email.classList.add("error");
    emailError.innerHTML = "Your email is not valid email";
  }
};

// **********password**********

const checkPassword = (password) => {
  const passwordError = document.getElementById("password-error");
  if (password.value.length > 7) {
    if (password.classList.contains("error")) {
      password.classList.replace("error", "success");
      passwordError.innerHTML = "";
    } else {
      password.classList.add("success");
    }
  } else {
    password.classList.add("error");
    passwordError.innerHTML = "password must be longer than 7 characters";
  }
};

// *********check password**********

const checkMatchPassword = (password, cpassword) => {
  const cpasswordError = document.getElementById("cpassword-error");
  if (password.value === cpassword.value && cpassword.value !== "") {
    if (cpassword.classList.contains("error")) {
      cpassword.classList.replace("error", "success");
    } else {
      cpassword.classList.add("success");
    }
  } else {
    cpassword.classList.add("error");
    cpasswordError.innerHTML = "password does not matched";
  }
};
