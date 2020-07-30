

function performSignUp() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var user = KiiUser.userWithUsername(username, password);
  user.register({
    success: function(theUser) {
      console.log("User registered: " + JSON.stringify(theUser));
      openListPage();
    },
    failure: function(theUser, errorString) {
      alert("Unable to register user: " + errorString);
      console.log("Unable to register user: " + errorString);
    }
  });
}


function performLogIn() {
  var username = document.getElementById("username-field").value;
  var password = document.getElementById("password-field").value;
  KiiUser.authenticate(username, password, {
    success: function(theUser) {
      console.log("User authenticated: " + JSON.stringify(theUser));
      openListPage();
    },
    failure: function(theUser, errorString) {
      console.log("Unable to authenticate user: " + errorString);
      alert("Unable to authenticate user: " + errorString);
    }
  });
}