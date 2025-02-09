// Loading Header and Footer into files
document.addEventListener("DOMContentLoaded", function () {
  fetch("/templates/header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();
    })
      // response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      updateActiveLink();
    })
    .catch((error) => console.error("Error loading the header:", error));

  fetch("/templates/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the footer:", error));

  // Dynamically change which page on
  function updateActiveLink() {
    const currentPath = window.location.pathname.replace('.html', '');

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      if (currentPath.includes(link.getAttribute("href").replace('.html', ''))) {
        link.classList.add("active");
      } 
      else {
        link.classList.remove("active");
      }
    });
  }
});
