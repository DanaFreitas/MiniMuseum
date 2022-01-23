

//slideshow
        $(function() {
          $('#slides').slidesjs({
              width: 940,
              height: 528,
              navigation: false
          });
      });




$( function() {
  $( "#accordion" ).accordion();
} );



//menu buttons
function home() {
    location.href="index.html"
}

function history() {
    location.href="history.html"
}

function gallery() {
    location.href="gallery.html"
}

function coffeestore() {
    location.href="coffeestore.html"
}

function contact() {
    location.href="contact.html"
}




"use strict";


//contact us form validation
$(document).ready(function() {
  $(":text, :password").after("<span>*</span>");
 arrival_date.focus()
  $("#reservation_form").submit(

  function(event){
   var isValid = true;

   
   $(":text").css("background-color", "pink");
   
   

  
    const nameGiven = /[A-Za-z]/;
    const name = $("#name").val();
    if (name == "") {
      $("#name").next().text("This field is required.");
      isValid = false; 
    }
     else if (!nameGiven.test(name)) {
      $("#name").next().text("Must have a valid email name.");
      isValid = false; }
  
    else {
      $("#name").next().text("");
    } 
  
  
    var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var email = $("#email").val();
    if (email == "") {
      $("#email").next().text("This field is required.");
      isValid = false; 
    } else if (!emailPattern.test(email)) {
      $("#email").next().text("Must be a valid email address.");
      isValid = false;
     } else {
        $("#email").next().text(""); } 
  
  
        if (isValid == false) {event.preventDefault();}
     
     });
});




//

$(document).ready(function() {
  $(":text, :password").after("<span>*</span>");
  arrival_date.focus()
  $("#reservation_form2").submit(
  function(event){
  
    var isValid = true;


    var AmountGiven = /[0-9]/;
    var Amount = $("#Amount").val();
    if (Amount == "") {
      $("#Amount").next().text("This field is required.");
      isValid = false; 
    }
     else if (!AmountGiven.test(Amount)) {
      $("#Amount").next().text("Must have a valid email name.");
      isValid = false; }
  
    else {
      $("#Amount").next().text("");
    }







    var nameGiven2 = /[A-Za-z]/;
    var name2 = $("#name2").val();
    if (name2 == "") {
      $("#name2").next().text("This field is required.");
      isValid = false; 
    }
     else if (!nameGiven2.test(name2)) {
      $("#name2").next().text("Must have a valid email name.");
      isValid = false; }
  
    else {
      $("#name2").next().text("");
    }
  
  
    var emailPattern2 = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    var email2 = $("#email2").val();
    if (email2 == "") {
      $("#email2").next().text("This field is required.");
      isValid = false; 
    } else if (!emailPattern2.test(email)) {
      $("#email2").next().text("Must be a valid email address.");
      isValid = false;
     } else {
        $("#email2").next().text(""); } 

    var AddressGiven = /[A-Za-z0-9]/;
    var Address = $("#Address").val();
    if (Address == "") {
      $("#Address").next().text("This field is required.");
      isValid = false; 
    }
     else if (!AddressGiven.test(Address)) {
      $("#Address").next().text("Must have a valid address.");
      isValid = false; }
  
    else {
      $("#Address").next().text("");
    }

    var CityGiven = /[A-Za-z0-9]/;
    var City = $("#City").val();
    if (City == "") {
      $("#City").next().text("This field is required.");
      isValid = false; 
    }
     else if (!CityGiven.test(City)) {
      $("#City").next().text("Must have a valid city name.");
      isValid = false; }
  
    else {
      $("#City").next().text("");
    }


    var CreditGiven= /[0-9]/;
    var CreditCard= $("#City").val();
    if (CreditCard == "") {
      $("#creditcard").next().text("This field is required.");
      isValid = false; 
    }
     else if (!CreditGiven.test(Creditcard)) {
      $("#creditcard").next().text("Must have a valid credit card number.");
      isValid = false; }
  
    else {
      $("#Credit").next().text("");
    }

    ExpGiven= /[0-9]{4}|[0-9]{2}\/[0-9]{2}/;
    var Exp= $("#exp").val();
    if ( Exp== "") {
      $("#exp").next().text("This field is required.");
      isValid = false; 
    }
     else if (!ExpGiven.test(Exp)) {
      $("#exp").next().text("Must have a valid expiration date.");
      isValid = false; }
  
    else {
      $("#exp").next().text("");
    }
    
    CvvGiven = /[0-9]{3}/;
    var Cvv= $("#cvv").val();
    if ( Cvv== "") {
      $("#cvv").next().text("This field is required.");
      isValid = false; 
    }
     else if (!CvvGiven.test(Cvv)) {
      $("#cvv").next().text("Must have a valid cvv.");
      isValid = false; }
  
    else {
      $("#cvv").next().text("");
    }


    if (isValid == false) {event.preventDefault();}





  });
  });
  var mylist = document.getElementById("State");
document.getElementById("favorite").value = mylist.options[mylist.selectedIndex].text;

var mylist = document.getElementById("Country");
document.getElementById("favorite").value = mylist.options[mylist.selectedIndex].text;




