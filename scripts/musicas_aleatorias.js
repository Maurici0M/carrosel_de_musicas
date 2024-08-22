// Código que mostra as músicas na tela de forma aleatória, independentemente da posição do elemento no array.

// A função 'shuffleArray' foi desenvolvida com o apoio da inteligência artificial, e modificada para que ficasse de forma adaptada ao site.

// O objetivo com essa função, é o de mostrar as músicas de forma aleatória, sempre quando a página for recarregada ou acessada novamente, para dar a impressão de que novos arquivos foram adicionados a cada acesso.

//Veja o código original (principal), no arquivo index_page_script.js.

function shuffleArray(arrayCarrossel) {
    for (let index = arrayCarrossel.length - 1; index > 0; index--) {
        const j = Math.floor(Math.random() * (index + 1));
        [arrayCarrossel[index], arrayCarrossel[j]] = [arrayCarrossel[j], arrayCarrossel[index]];

        // Criar elemento
    let carrosselScript = document.createElement('div')
    
    // Atribuir uma classe ao elemento (caso necessário)
    carrosselScript.className = 'card swiper-slide'
    
    
    // Manipular elemento
    //Novo modelo de aplicação do elemento de forma simplificada adicionado
     
        carrosselScript.innerHTML = `

            ${arrayCarrossel[index].iFrame}
    
        `
    
    // Adicionar na página
    
        let selecionarClasseCarrossel = document.querySelector('.card-wrapper')
        selecionarClasseCarrossel.appendChild(carrosselScript)
    }
    return arrayCarrossel;
}

const meuArray = arrayCarrossel;
const arrayEmbaralhado = shuffleArray(meuArray);


