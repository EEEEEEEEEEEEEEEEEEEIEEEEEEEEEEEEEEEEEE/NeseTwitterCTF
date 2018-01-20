function validatesignup() { 
    var msg = "You fill follow:\n"
    var valid = true
    var x = document.forms["form"]["first_name"].value;
    if (x == null || x == "") {
      msg += "First Name\n";
      valid = false;
    }
    var x = document.forms["form"]["last_name"].value;
    if (x == null || x == "") {
      msg += "Last Name\n";
      valid = false;
    }
    var x = document.forms["form"]["email"].value;
    if (x == null || x == "") {
      msg += "Email\n";
       valid = false
    }
    else {
      var regEx = /^    $/;
    }
    var x = document.forms["form"]["ssn"].value;
    if (x == null || x == "") {
      msg += "SSN\n";
      valid = false
    }
    else { 
      var regEx = /^\d{3}-?\d{2}-?\d{4}$/;
      if (!regEx.test(x)){
        alert ("SSN: You must use the correct format XXX-XX-XXXX")
        valid = false
      }
    }
    var x = document.forms["form"]["phone"].value;
    if (x == null || x == "") {
      msg += "Phone Number\n";
      valid = false
    }
    else {
      var regEX =/^\(?\d{3}\)?-?\d{3}-?\d{4}$/;
      if (!regEx.test(x)){
        alert ("PHONE: You must use the correct format (XXX)-XX-XXXX")
        valid = false
      }
    }
    var x = document.forms["form"]["password"].value;
    if (x == null || x == "") {
      msg += "Paskey\n";
      valid = false
    }
    var x = document.forms["form"]["tandc"].checked; 
    if (x == false) {
      msg += "Terms n Condations\n";
      valid = false
    } 

    if (valid) { 
      alert("Thenk you!")
      return valid
    }
    else { 
      alert(msg)
      return valid
    }
  }

