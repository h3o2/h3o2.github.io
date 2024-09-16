// Use JavaScript to load the navbar into the #navbar div
fetch("navbar.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("navbar").innerHTML = data;

    // Ensure the script to handle menu clicks runs after the navbar is loaded
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarLinks = document.querySelector('.navbar-links');

    if (mobileMenu && navbarLinks) {
      mobileMenu.addEventListener('click', () => {
        console.log('Menu button clicked!');
        navbarLinks.classList.toggle('active');
      });
    } else {
      console.error("Navbar elements not found!");
    }
  });

// Use JavaScript to load the footer into the #footer div
fetch("footer.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer").innerHTML = data;
  });
