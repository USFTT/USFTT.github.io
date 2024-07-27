// Loading Header and Footer into files
document.addEventListener("DOMContentLoaded", function () {
  fetch("templates/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      updateActiveLink();
    })
    .catch((error) => console.error("Error loading the header:", error));

  fetch("templates/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the footer:", error));

  // Dynamically change which page on
  function updateActiveLink() {
    const currentPath = window.location.pathname;

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentPath) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
});
