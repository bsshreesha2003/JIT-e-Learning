function validateForm() {
    var usn = document.getElementById("usn").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var branch = document.getElementById("branch").value;
    var yearOfStudy = document.getElementById("year-of-study").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    // Check if USN is empty
    if (usn == "") {
      alert("USN must be filled out");
      return false;
    }
  
    // Check if Name is empty
    if (name == "") {
      alert("Name must be filled out");
      return false;
    }
  
    // Check if Email is empty
    if (email == "") {
      alert("Email must be filled out");
      return false;
    }
  
    // Check if Phone number is empty
    if (phone == "") {
      alert("Phone number must be filled out");
      return false;
    }
  
    // Check if Branch is empty
    if (branch == "") {
      alert("Branch must be selected");
      return false;
    }
  
    // Check if Year of Study is empty
    if (yearOfStudy == "") {
      alert("Year of Study must be selected");
      return false;
    }
  
    // Check if Password is empty
    if (password == "") {
      alert("Password must be filled out");
      return false;
    }
  
    // Check if Confirm Password is empty
    if (confirmPassword == "") {
      alert("Confirm Password must be filled out");
      return false;
    }
  
    // Check if Password and Confirm Password match
    if (password != confirmPassword) {
      alert("Password and Confirm Password must match");
      return false;
    }
  
    return true;
  }