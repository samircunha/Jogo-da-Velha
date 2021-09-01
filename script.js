//Variáveis que desenvolvem o jogo
let play = 0;
let jogadas = 0;
let jogo = ['', '', '', '', '', '', '', '', ''];
let resultadosGanhador = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let jogador1 = 'j1';
let jogador2 = 'j2';
let gameOver = false;
let buttonRestart = document.querySelector('.btn');

//Função principal
function jogada (casaJogada, jogada) {
    //Captador da jogada 
    let casaClicada = document.querySelector(casaJogada);
    casaClicada.setAttribute ('onclick', '');
    
    //Lógica para aplicar imagem, alterar jogador e executar a função que analisa o resultado
    if (play == 0){
        jogo[jogada-1] = jogador1;
        jogadas++;
        play = 1;
        aplicaImg(casaClicada, "<img src='./imagens/casaStark.png'>")
        resultado(jogo, jogadas);
    }else{
        jogo[jogada-1] = jogador2;
        jogadas++;
        play = 0;
        aplicaImg(casaClicada, "<img src='./imagens/casaLan.png'>")
        resultado(jogo, jogadas);
    }
    
}

//Função que aplica a imagem, chamada na Função principal
function aplicaImg(posicao, img){
    posicao.innerHTML = img;
}

//Função que analisa as possibilidades de resultado possíveis com as jogadas efetuadas
function resultado(array, jogadas) {
    let ganhador;

    for (i of resultadosGanhador){
        //Lógica para saber o ganhador, ou se houve empate
        if (array[i[0]] == jogador1 && array[i[1]] == jogador1 && array[i[2]] == jogador1){
            gameOver = true;
            ganhador = 'A ganhadora foi a Casa Stark'
        }else if(array[i[0]] == jogador2 && array[i[1]] == jogador2 && array[i[2]] == jogador2){
            gameOver = true;
            ganhador = 'A ganhadora foi a Casa Lannister'
        }else if(jogadas == 9){
            gameOver = true;
            ganhador = 'Deu empatou! Tente novamente'
        }
    }
    //Dispara a função que motra o resultado
    if (gameOver){
        mostraResultado(ganhador);
    }
}

//Função que mostra o resultado
function mostraResultado(ganhador){
    let resultado = document.getElementById('resultado');
    let textoGanhador = document.getElementById('ganhador');
    let tela = document.getElementById('telaInicial');
    //Aplicações para alterar a tela do jogo para a tela do resultado
    tela.style.display = 'none';
    textoGanhador.innerText = ganhador;
    resultado.style.display = 'block';
}

//Botão de restart do jogo
buttonRestart.addEventListener('click', function(){
    window.location.reload();
})
