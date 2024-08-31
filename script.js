// Navbar toggle for mobile view
const mobileMenu = document.getElementById('mobile-menu');
const navbarLinks = document.querySelector('.navbar-links');

mobileMenu.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("fullImage");
var captionText = document.getElementById("caption");

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

// Close the modal when clicking outside the image
modal.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}