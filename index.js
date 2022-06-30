//Final Project  
//Written by: Carolina Torres Restrepo - 2195431 
//Written by: Seky Leonardy Perez Moya - 2195412
//“Responsabilities: We both worked together in HTML, CSS and JavaScript.”
//“Responsabilities: Carolina a little more on HTML CSS and Seky more on JavaScript.”
//For “Front-End Web Programming” Section 05807 - Winter 2022 

// Slideshow welcome page
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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

