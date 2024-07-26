// Loading Header into files
document.addEventListener("DOMContentLoaded", function () {
  fetch("templates/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the header:", error));

  fetch("templates/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading the footer:", error));
});
