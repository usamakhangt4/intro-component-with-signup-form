function validate() {
  let fname = document.getElementById("fname");
  let fnameVal = fname.value;
  let lname = document.getElementById("lname");
  let lnameVal = lname.value;
  let email = document.getElementById("email");
  let emailVal = email.value;
  let pass = document.getElementById("pass");
  let passVal = pass.value;

  if (fnameVal == "") {
    fname.classList.add("error");
    document.getElementsByClassName("fErr")[0].style.visibility = "visible";
    document.getElementsByClassName("fErr")[1].style.visibility = "visible";
  } else {
    fname.classList.remove("error");
    document.getElementsByClassName("fErr")[0].style.visibility = "hidden";
    document.getElementsByClassName("fErr")[1].style.visibility = "hidden";
  }
  if (lnameVal == "") {
    lname.classList.add("error");
    document.getElementsByClassName("lErr")[0].style.visibility = "visible";
    document.getElementsByClassName("lErr")[1].style.visibility = "visible";
  } else {
    lname.classList.remove("error");
    document.getElementsByClassName("lErr")[0].style.visibility = "hidden";
    document.getElementsByClassName("lErr")[1].style.visibility = "hidden";
  }
  if (emailVal == "") {
    email.classList.add("error");
    document.getElementsByClassName("emailErr")[0].style.visibility = "visible";
    document.getElementsByClassName("emailErr")[1].style.visibility = "visible";
  } else if (validateEmail(emailVal)) {
    email.classList.remove("error");
    document.getElementsByClassName("emailErr")[0].style.visibility = "hidden";
    document.getElementsByClassName("emailErr")[1].style.visibility = "hidden";
  } else {
    document.getElementsByClassName("emailErr")[0].style.visibility = "visible";
    document.getElementsByClassName("emailErr")[1].style.visibility = "visible";
  }

  if (passVal == "") {
    pass.classList.add("error");
    document.getElementsByClassName("passErr")[0].style.visibility = "visible";
    document.getElementsByClassName("passErr")[1].style.visibility = "visible";
  } else {
    pass.classList.remove("error");
    document.getElementsByClassName("passErr")[0].style.visibility = "hidden";
    document.getElementsByClassName("passErr")[1].style.visibility = "hidden";
  }
}
function validateEmail(email) {
  if (email == "") {
    email.preventDefault();
  }
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// .classList.remove("mystyle");
// .classList.add("mystyle");
// .style.display = "none";
