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
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});

function enlargeImage(image) {
    const enlargedContainer = document.getElementById('enlarged-container');
    enlargedContainer.innerHTML = `<img src="${image.src}" class="enlarged-image">`;
    enlargedContainer.style.display = 'flex';
  }
  
  function cancelEnlarge() {
    const enlargedContainer = document.getElementById('enlarged-container');
    enlargedContainer.style.display = 'none';
    enlargedContainer.innerHTML = '';
  }
  

document.getElementById('menu-icon').addEventListener('click', function() {
   
    var navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'none' ? 'flex' : 'none';
  });
  
