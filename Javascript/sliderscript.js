/* Main Home page slider script*/ 
function showSlides() 
{
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
/* onclick function */
function subscribe()
{
  var Mail_id = document.getElementById("Mail").value;
  if(Mail_id)
  {
    document.getElementById("Succesfully").innerHTML="Thanks for your support";
    document.getElementById("Mail").value=" ";
    document.getElementById("b1").disabled = true;
    document.getElementById("Mail").disabled = true;
    document.getElementById("Mail").style.backgroundColor="white";
  }
  else
  {
    alert("Please provide a valid mail")
  }
}
/* menu hemburger*/
function myFunction() {
  var x = document.getElementById("demo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}

/* Dark theme button
function Toggle()
{
  var element = document.body;
  element.classList.toggle("dark-mode");
}*/
