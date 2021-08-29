let play = 0;
let jogadas = 0;
let jogo = [];
let jogador1 = 'j1';
let jogador2 = 'j2';

function jogada (casaJogada, jogada) {
    let casaClicada = document.querySelector(casaJogada);
    casaClicada.setAttribute ('onclick', '');
    
    if (play == 0){
        jogo[jogada-1] = jogador1;
        jogadas++;
        play = 1;
        aplicaImg(casaClicada, "<img src='./imagens/jogada1.png'>")
        resultado(jogo, jogadas);
;
    }else{
        jogo[jogada-1] = jogador2;
        jogadas++;
        play = 0;
        aplicaImg(casaClicada, "<img src='./imagens/jogada2.png'>")
        resultado(jogo, jogadas);
    }
    
}

function aplicaImg(posicao, img){
    posicao.innerHTML = img;
}

function resultado(array, jogadas) {
    
    if (array[0] == jogador1 && array[1] == jogador1 && array[2] == jogador1 ||
        array[3] == jogador1 && array[4] == jogador1 && array[5] == jogador1 ||
        array[6] == jogador1 && array[7] == jogador1 && array[8] == jogador1 ||
        array[0] == jogador1 && array[3] == jogador1 && array[6] == jogador1 ||
        array[1] == jogador1 && array[4] == jogador1 && array[7] == jogador1 ||
        array[2] == jogador1 && array[5] == jogador1 && array[8] == jogador1 ||
        array[0] == jogador1 && array[4] == jogador1 && array[8] == jogador1 ||
        array[2] == jogador1 && array[4] == jogador1 && array[6] == jogador1){
        setTimeout(() => {
            alert('O jogo Acabou, O jogador 1 ganhou!');
            window.location.reload();
        }, 100) 
    }else if (array[0] == jogador2 && array[1] == jogador2 && array[2] == jogador2 ||
        array[3] == jogador2 && array[4] == jogador2 && array[5] == jogador2 ||
        array[6] == jogador2 && array[7] == jogador2 && array[8] == jogador2 ||
        array[0] == jogador2 && array[3] == jogador2 && array[6] == jogador2 ||
        array[1] == jogador2 && array[4] == jogador2 && array[7] == jogador2 ||
        array[2] == jogador2 && array[5] == jogador2 && array[8] == jogador2 ||
        array[0] == jogador2 && array[4] == jogador2 && array[8] == jogador2 ||
        array[2] == jogador2 && array[4] == jogador2 && array[6] == jogador2){
        setTimeout(() => {
            alert('O jogo Acabou, O jogador 2 ganhou!');
            window.location.reload();
        }, 100) 
    }else if(jogadas == 9){
        setTimeout(() => {
            alert('O jogo Empatou, ninguém ganhou!');
            window.location.reload();
        }, 100) 
    }

}


