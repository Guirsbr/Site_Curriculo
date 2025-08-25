
// Coloca a data atual no texto do emprego atual no HTML
const date = new Date();

let currentJobDate = document.getElementById("main_experience-date-3");
currentJobDate.innerText = currentJobDate.innerText + " " + (date.getMonth() + 1) + "." + date.getFullYear();