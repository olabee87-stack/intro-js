var registeredUsers = []; // this array stores valid usernames until the next pageload
$(document).ready(function() {
  $("#registerBtn").on("click", validateForm); // This is the jquery version
});

/*if (registeredUsers.length > 5) { //This is the valilla script of the above
  registeredUsers.shift();
}*/

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating....");

  console.log("user name: " + validateUsername());
  console.log("email: " + validateEmail());
  console.log("password: " + validatePassword());
  console.log("first_name: " + validateFirstName());
  console.log("last_name: " + validateLastName());
  console.log("phone_number: " + validatePhoneNumber());

  if (validateUsername() && validateEmail() && validatePassword()) {
    var _newUser = getUserName();
    registeredUsers.push(_newUser);
    renderRegisteredUsers();

    // add code to update registeredUsers array with new user and call render function
    // TODO
    document.registration.reset(); // reset form input fields
  }
}

function renderRegisteredUsers() {
  registeredUsers.forEach(function(registeredUser) {
    $("#registered-users").empty();
    /*var _newUser = document.createElement("li");
    _newUser.innerHTML = registeredUser;
    document.getElementById("registered-users").appendChild(_newUser);*/
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
  var first_name = getFirstName();
  if (first_name.length === " ") {
    return false;
  } else {
    return true;
  }
}

function validateLastName() {
  var first_name = getLastName();
  if (last_name.length === " ") {
    return false;
  } else {
    return true;
  }
}

function validatePhoneNumber() {
  var phone_number = getPhoneNumber();
  if (phone_number.length === "") {
    return false;
  } else {
    return true;
  }
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

  if (_password.length < 8) {
    alert("Are you kidding me? That thing is too short!");
    return false;
  }

  if (_password !== _confirmPassword) {
    alert("Both passwords do not match, check again");
    return false;
  }

  return true;
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
  //(typeof document.registration.username.value === "undefined") {
  if (typeof $('[name="username"]').val() === "undefined") {
    //jquery version
    return "";
  } else {
    return $('[name="username"]').val();
  }
}

function getFirstName() {
  if (typeof $('[name="first_name"]').val() === "undefined") {
    //jquery version
    return "";
  } else {
    return $('[name="first_name"]').val();
  }
}
/*(typeof document.registration.first_name.value === "undefined") {
    return "";
  } else {
    return document.registration.first_name.value;
  }
}*/

function getLastName() {
  if (typeof $('[name="last_name"]').val() === "undefined") {
    //jquery version
    return "";
  } else {
    return $('[name="last_name"]').val();
  }
}
/*(typeof document.registration.last_name.value === "undefined") {
    return "";
  } else {
    return document.registration.last_name.value;
  }
}*/

function getPhoneNumber() {
  if (typeof $('[name="phone_number"]').val() === "undefined") {
    //jquery version
    return "";
  } else {
    return $('[name="phone_number"]').val();
  }
}

/*(typeof document.registration.phone_number.value === "undefined") {
    return "";
  } else {
    return document.registration.phone_number.value;
  }
}*/

function getEmail() {
  if (typeof $('[name="email"]').val() === "undefined") {
    //jquery version
    return "";
  } else {
    return $('[name="email"]').val();
  }
}
/*(typeof document.registration.email.value === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }
}*/

// TODO

function getPassword() {
  if (typeof $('[name="password"]').val() === "undefined") {
    //jquery version
    return "";
  } else {
    return $('[name="password"]').val();
  }
}
/*(typeof document.registration.password.value === "undefined") {
    return "";
  } else {
    return document.registration.password.value;
  }
}*/

// TODO

function getConfirmPassword() {
  if (typeof $('[name="password_confirm"]').val() === "undefined") {
    //jquery version
    return "";
  } else {
    return $('[name="password_confirm"]').val();
  }
}
/*(typeof document.registration.password_confirm.value === "undefined") {
    return "";
  } else {
    return document.registration.password_confirm.value;
  }
}*/
// TODO
