
  
  
  
// Use JavaScript to load the navbar into the #navbar div
fetch("navbar.html")
 .then((response) => response.text())
 .then((data) => {
   document.getElementById("navbar").innerHTML = data;
});
  
// Use JavaScript to load the footer into the #footer div
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
});

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarLinks = document.querySelector('.navbar-links');
  
    mobileMenu.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
});