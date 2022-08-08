const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav

burger.addEventListener('click',()=>{
    //Toggle Nav
    nav.classList.toggle('nav-active');

    //Animation Links
    navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });       
        //Burger Animation
        burger.classList.toggle('toggle');
    });
   
}

navSlide();





let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  //captionText.innerHTML = dots[slideIndex-1].alt;
} 



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btns = document.getElementsByClassName("main-img");
for (btn of btns) {
  btn.onclick = function () {
  modal.style.display = "block";
  }
}



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 






let slideIndexModal = 1;
  showSlidesModal(slideIndexModal);
  console.log();

// Next/previous controls modal
function plusSlidesModal(n) {
  showSlidesModal(slideIndexModal += n);
}

// Thumbnail image controls modal
function currentSlideModal(n) {
  showSlidesModal(slideIndexModal = n);
}

function showSlidesModal(n) {
  let i;
  let slidesModal = document.getElementsByClassName("mySlidesModal");
  let dots = document.getElementsByClassName("demoModal");
  if (n > slidesModal.length) {slideIndexModal = 1}
  if (n < 1) {slideIndexModal = slidesModal.length}
  for (i = 0; i < slidesModal.length; i++) {
    slidesModal[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidesModal[slideIndexModal-1].style.display = "block";
  dots[slideIndexModal-1].className += " active";
} 



// remove event listener on mobile version
function displayModal() {
  modal.style.display = "block";
}

function updateModalFunctionality(){
  // Get the button that opens the modal
  var btns = document.getElementsByClassName("main-img");
  var windowWidth = window.innerWidth;
  console.log("function ran");
  if (windowWidth > 768) {
    console.log("window width is greater than 768")
    for (btn of btns) {
      btn.addEventListener("click",displayModal);
    }
  } else {
    console.log("else");
    for (btn of btns) {
      btn.removeEventListener("click",displayModal);
    }
  }
  console.log(btn);
}
window.addEventListener("resize",updateModalFunctionality)
updateModalFunctionality();













