/**
 * Estudo do array
 * Exemplo do ano em um jogo de cartas
 * @author Davi do couto
 */

function sortear(){
    //           [0]   [1]  [2]  [3]
    let nipes = ["♥", "♦", "♣", "♠"]

    //           [0]   [1]  [2]  [3] ...
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

    // gerando um número aleatório em JS (random)
    //Math.floor() converte para números inteiros
    //Math.random() * 4 (gera 4 números 0, 1, 2, 3)
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let facesSorteado = faces[Math.floor(Math.random() * 13)] //(* 13 é importante para navegar em quantos objetos tem na array)

    console.clear() // Limpar a tela (sumir a anterior) sempre que apertar no botão

    // console.log(facesSorteado) // Responsável por mostrar a variável no terminal
    // console.log(nipeSorteado)

    //Determinar a cor com base no nipes sorteado
    if(nipeSorteado === "♥" || nipeSorteado === "♦"){
        cor = '#FF0000'
    }else {
        cor = '#000'
    }

    //Renderização do canto superior esquerdp
    document.getElementById('supEsq').innerHTML = `<div>${facesSorteado}</div> <div>${nipeSorteado}</div>`

    //A linha abaixo aplica o estilo da cor ao documento html identificado como 'supEsq'
    document.getElementById('supEsq').style.color = cor
    document.getElementById('infDir').style.color = cor

    //Renderização do centro
    //Verificar o nipe sorteado e renderizar uma imagem ou o nipe e sua respectiva cor de acordo com a carta
    let cc = document.getElementById('centroCarta')
    if(facesSorteado === "J"){
        cc.innerHTML = `<img src="img/valete.png">`
    } else if(facesSorteado === "Q"){
        cc.innerHTML = `<img src="img/dama.png">`
    }else if(facesSorteado === "K"){
        cc.innerHTML = `<img src="img/rei.png">`
    }else{
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor
    }

    //Renderização do canto do inferior direito
    document.getElementById('infDir').innerHTML = `<div>${facesSorteado}</div> <div>${nipeSorteado}</div>`
    
    //A linha abaixo aplica o estilo da cor ao doxumento html identificado como 'infDir'
    document.getElementById('infDir').style.color = cor
}
