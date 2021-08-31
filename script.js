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
let buttonRestart = document.querySelector('.btn');

function jogada (casaJogada, jogada) {
    let casaClicada = document.querySelector(casaJogada);
    casaClicada.setAttribute ('onclick', '');
    
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

function aplicaImg(posicao, img){
    posicao.innerHTML = img;
}

function resultado(array, jogadas) {
    
    for (i of resultadosGanhador){

        if (array[i[0]] == jogador1 && array[i[1]] == jogador1 && array[i[2]] == jogador1){
            setTimeout(() => {
                alert('O jogo Acabou, A Casa Stark ganhou!');
            }, 100) 
        }else if(array[i[0]] == jogador2 && array[i[1]] == jogador2 && array[i[2]] == jogador2){
            setTimeout(() => {
                alert('O jogo Acabou, A Casa Lannister ganhou!');
            }, 100) 
        }else if(jogadas === 9){
            alert('O jogo empatou')
        }
    }
}


buttonRestart.addEventListener('click', function(){
    window.location.reload();
})
