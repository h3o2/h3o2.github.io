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

  const mobileMenu = document.getElementById('mobile-menu');
  const navbar = document.querySelector('.navbar-links');
  
  mobileMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });  