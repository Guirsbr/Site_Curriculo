
// Coloca a data atual no texto do emprego atual no HTML
const date = new Date();

let textoData = document.querySelector('#texto-Data_EmpregoAtual');
textoData.innerText = "10.2021 - " + (date.getMonth() + 1) + "." + date.getFullYear();