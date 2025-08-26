
// Pega do HTML o elemento do botão e da barra de navegação
var navButton = document.getElementById('nav_button-container');
var navBar = document.getElementById("nav-container");

// Adiciona no botão o evento de aparecer e desaparecer a barra de navegação
navButton.addEventListener("click", () => {
  if (navBar.style.display === "block") {
    navBar.style.display = "none";
  } else {
    navBar.style.display = "block";
  }   
});
