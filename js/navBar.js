
var navButton = document.getElementById('nav_button-container');
var navBar = document.getElementById("nav-container");

navButton.addEventListener("click", () => {
  if (navBar.style.display === "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }   
});
