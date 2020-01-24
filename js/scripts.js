var registeredUsers = []; // this array stores valid usernames until the next pageload

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating ....");

  console.log("user name: " + validateUsername());
  console.log("email: " + validateEmail());
  console.log("password: " + validatePassword());
  console.log("firstname: " + validateFirstName());
  console.log("lastname: " + validateLastName());
  console.log("phonenumber: " + validatePhoneNumber());

  //  the below code is only true when all the conditions are met. If one is false, then all becomes false
  if (
    validateUsername() &&
    validateEmail() &&
    validatePassword() &&
    validatePhoneNumber() &&
    validateFirstName() &&
    validateLastName()
  ) {
    // add code to update registeredUsers array with new username and call render function
    // TODO
    var _newUser = getUserDataObj();
    registeredUsers.push(_newUser);
    renderRegisteredUsers();
    document.registration.reset(); // reset form input fields
  }
}

function getUserDataObj() {
  return {
    userName: getUserName(),
    firstName: getFirstName(),
    lastName: getLastName(),
    email: getEmail(),
    phoneNumber: getPhoneNumber()
    //password: getPassword(),
    //confirmPassword: getConfirmPassword()
  };
}

function renderRegisteredUsers() {
  document.getElementById("registered-users").innerHTML = "";

  registeredUsers.forEach(function(registeredUser) {
    var _newUser = document.createElement("li");
    _newUser.innerHTML = JSON.stringify(registeredUser);
    document.getElementById("registered-users").appendChild(_newUser);
  });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername() {
  var _userName = getUserName();

  return !checkSpace(_userName);
}

function validateFirstName() {
  var _firstName = getFirstName();

  return _firstName !== "";
}

function validateLastName() {
  var _lastName = getLastName();

  return _lastName !== "";
}

function validatePhoneNumber() {
  var _phoneNumber = getPhoneNumber();

  return !isNaN(_phoneNumber);
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = getEmail();

  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }

  return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = getConfirmPassword();

  if (_password !== _confirmPassword) {
    alert("Both passwords do not match, check again");
    return false;
  }

  if (_password.length < 8) {
    alert("Are you kidding me? That thing is too short!");
    return false;
  }

  if (!checkNumber(_password)) {
    return false;
  }

  if (!checkCapitalLetter(_password)) {
    return false;
  }

  return true;
}

function checkNumber(_password) {
  if (_password.match(/[0-9]+/g).length > 0) {
    return true;
  }
  return false;
}

function checkCapitalLetter(_password) {
  if (_password.match(/[A-Z]+/g).length > 0) {
    return true;
  }
  return false;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
  return sample === "" || sample.indexOf(" ") > -1;
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function getUserName() {
  if (typeof document.registration.username.value === "undefined") {
    return "";
  } else {
    return document.registration.username.value;
  }
}

function getFirstName() {
  if (typeof document.registration.firstname.value === "undefined") {
    return "";
  } else {
    return document.registration.firstname.value;
  }
}

function getLastName() {
  if (typeof document.registration.lastname.value === "undefined") {
    return "";
  } else {
    return document.registration.lastname.value;
  }
}

function getPhoneNumber() {
  if (typeof document.registration.phonenumber.value === "undefined") {
    return "";
  } else {
    return document.registration.phonenumber.value;
  }
}

function getEmail() {
  if (typeof document.registration.email.value === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }
}

// TODO

function getPassword() {
  if (typeof document.registration.password.value === "undefined") {
    return "";
  } else {
    return document.registration.password.value;
  }
}

// TODO

function getConfirmPassword() {
  if (typeof document.registration.password_confirm.value === "undefined") {
    return "";
  } else {
    return document.registration.password_confirm.value;
  }
}
