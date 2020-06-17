
/* The function below makes a message appear onto the Web page, when a customer does not include 
an email into the email text box. The message indicates to the customer that an email is required
to be typed into the textbox, in order for the pizza order to be processed. 
*/

/* The function below makes a message appear onto the Web page, when the contact form is completed. 
The message thanks the customer for their contact information.
*/ 

function validateForm() {
    var email = document.forms["contactForm"]["email"].value;
    var submit = document.forms["contactForm"]["submit"].value;
    if (email =="") {
        alert("EMAIL IS REQUIRED");
    } else if (submit >="") {
        alert("THANK YOU!");
    }


//The copy of submission form appears on the console, which includes: name, address, phone, & email.

        var name= document.getElementById("name").value;
        var address= document.getElementById("address").value;
        var phone= document.getElementById("phone").value;
        var email= document.getElementById("email").value;

        console.log(name);
        console.log(address);
        console.log(phone);
        console.log(email);        

    }

/* The .toggle() effect is utilized below. For the contact page the text boxes 
below gets shown and/or hidden (this mostly depends on if the target is visible or not).
*/

/* The animate effect is utilized below. However, the stop effect is not included, 
because visitors/and or customers may want to see the contact form again. Overall,
there is a .1 sec animation. 
*/

$(document).ready(function() {

    $("#button").click(function() {
  
      $("#name").toggle(1000);
  
      $("#address").toggle(1000);
  
      $("#phone").toggle(1000);

      $("#email").toggle(1000);
  
    });
  
  });
 
