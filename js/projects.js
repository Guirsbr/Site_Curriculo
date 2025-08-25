
// Declaração da lista de "EventListeners"
const eventListenersList = [];

// Declaração da lista de caminhos para as imagens dos projetos
// Cada lista dentro da lista principal representa um projeto
// Onde cada projeto pode ter "n" imagens
const imageSrcList = [
  ["img/projects/project1_code1.png", "img/projects/project1_code2.png", "img/projects/project1_code3.png"],
  ["img/projects/project2_code1.png", "img/projects/project2_code2.png", "img/projects/project2_code3.png"],
  ["img/projects/project3_screen1.png", "img/projects/project3_screen2.png", "img/projects/project3_code1.png", "img/projects/project3_code2.png"]
];

// Loop que itera a cada projeto
for (let projectNumber = 1; projectNumber <= imageSrcList.length; projectNumber++) {

    // Insere uma nova lista de "EventListeners" a cada projeto
    eventListenersList.push([])
  
    // Loop que itera a cada imagem do projeto
    for (let imageNumber = 1; imageNumber <= imageSrcList[projectNumber-1].length; imageNumber++) {

      // Adiciona o "EventListener" que irá alterar a imagem do projeto e alterar o CSS de ativo em cada botão do projeto
      eventListenersList[projectNumber-1].push(document.getElementById(`main_project${projectNumber}_aside_text${imageNumber}`))
      eventListenersList[projectNumber-1][imageNumber-1].addEventListener("click", () => {
        alterImageFromProject(projectNumber, `img/projects/project${projectNumber}_image${imageNumber}.png`);
        removeAllActiveTexts(projectNumber, imageSrcList[projectNumber-1].length);
        eventListenersList[projectNumber-1][imageNumber-1].className = "main_project_aside_text-active";
      });
    }
}

// Definição das funções utilizadas nos "EventListeners":

// Função que altera a imagem de um projeto especifico
// Sendo necessário fornecer o número do projeto e o "source (src)" da imagem substituta
function alterImageFromProject(projectNumber, imageSrc) {
  const projectImage = document.getElementById(`main_project${projectNumber}_aside_figure-img`);
  projectImage.src = imageSrc;
}

// Função que remove a classe de ativo de todos os textos de seleção de imagem de um projeto especifico
// Sendo necessário fornecer o número do projeto e a quantidade de botões de seleção que o projeto tem
function removeAllActiveTexts(projectNumber, quantityOfButtons) {
  for (let i = 1; i < quantityOfButtons + 1; i++) {
    const projectText = document.getElementById(`main_project${projectNumber}_aside_text${i}`);
    projectText.className = "";
  }
}
