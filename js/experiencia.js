const date = new Date();

let textoData = document.querySelector('#texto-Data_EmpregoAtual');
textoData.innerText = "10.2021 - " + (date.getMonth() + 1) + "." + date.getFullYear();