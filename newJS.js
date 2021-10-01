// button of read more or less for about page
function read_more_less() {
  var btn = document.getElementById("btn");
  var txt = document.getElementById("text");
  var minText = "'FashionSocial' is a social network founded following our passion for fashion alongside our love for the planet.<br>" +
      "In 'FashionSocial' you can find unique items that you may not find in malls and stores,<br>" + " at affordable prices and a huge selection.<br>"
      + "<br> ...";
  var fullText = "'FashionSocial' is a social network founded following our passion for fashion alongside our love for the planet.<br>" +
      "In 'FashionSocial' you can find unique items that you may not find in malls and stores,<br>" + " at affordable prices and a huge selection.<br>"
      + "In addition, the site members will be able to keep up to date with various events around<br>" + " the country related to second-hand fashion.<br>" +

      "'FashionSocial' was founded out of our love for the planet and the desire to preserve it,<br>" +
      "We, the founders of the site, are avid fashion enthusiasts, but aware of the damage involved in the fashion industry.<br>" + " From here we saw fit that such a social network could serve both us and the planet together. <br>";

  if (btn.value == 'Read More') {
      btn.value = 'Read Less';
      txt.innerHTML = fullText;
  } else {
      btn.value = 'Read More';
      txt.innerHTML = minText;
  }
}


// by press sign up - sing in display off
function signUpClick() {
  var x = document.getElementById("signup");
  var y = document.getElementById("signin");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}

// by press sign in - sign up display off
function signInClick() {
  var x = document.getElementById("signin");
  var y = document.getElementById("signup");
  if (x.style.display === "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
}



// able and disable fields in the forms
function disable_fn(){
  document.getElementById('FirstName').disabled=true;

}

function able_fn(){
  document.getElementById('FirstName').disabled=false;

}
function disable_ln(){
  document.getElementById('LastName').disabled=true;

}

function able_ln(){
  document.getElementById('LastName').disabled=false;

}

function disable_e_u(){
  document.getElementById('Emailup').disabled=true;

}

function able_e_u(){
  document.getElementById('Emailup').disabled=false;

}


function disable_p_u(){
  document.getElementById('pwdup').disabled=true;

}

function able_p_u(){
  document.getElementById('pwdup').disabled=false;

}

function disdable_e_i(){
  document.getElementById('Emailin').disabled=true;

}

function able_e_i(){
  document.getElementById('Emailin').disabled=false;

}

function disable_p_i(){
  document.getElementById('pwdin').disabled=true;

}

function able_p_i(){
  document.getElementById('pwdin').disabled=false;

}


function able_fn_n() {
    document.getElementById('name').disabled = true;

}

function disable_fn_n() {
    document.getElementById('name').disabled = false;

}


function disable_fn_s() {
    document.getElementById('style').disabled = false;

}

function able_fn_s() {
    document.getElementById('style').disabled = true;

}

function able_fn_p() {
    document.getElementById('price').disabled = true;

}

function disable_ln_p() {
    document.getElementById('price').disabled = false;

}
function forgotPassword(EmailAdress){

  var newPass = Math.random().toString(36).slice(-8);

  Email.send({ 
    Host: "smtp.gmail.com", 
    Username: "fashionsocial@gmail.com", 
      Password: "fashionsocial123!",
    To: EmailAdress, 
      From: "fashionsocial@gmail.com",
    Subject: "Your new password is ready" , 
    Body: "Your new password is " + newPass +"." + " I will be happy to see you.", 
  }) 
  
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(EmailAdress) ) {
    alert("New password sent to your Email!");

} else{
  alert("Please enter valid Email address");
}

}
// Updating textbox about me

 function myFunction() {
  var x = document.getElementById("myText").value;
     alert("Successfully submitted!");

}

function placeOrder() {
    alert("Payment succeed!");
    window.open("http://localhost:8000/homepage");
    window.close();
}



