let altura = 0;
let largura = 0;
let alturaMosquito = 0;
let lado = 0;
var vidas = 1
var tempo = 10;
var criaMosquitoTempo;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel == 'normal'){
    criaMosquitoTempo = 1500;
} else if (nivel == 'dificil') {
    criaMosquitoTempo = 1000;
} else if (nivel == 'extremo'){
    criaMosquitoTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
    largura = window.innerWidth;
    altura = window.innerHeight;
}

var cronometro = setInterval(()=> {
    tempo -= 1;
    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = 'vitoria.html';
    } else {
        document.getElementById("cronometro").innerHTML = tempo;
    }
}, 1000)

function tamanhoRandomico() {
    alturaMosquito = Math.floor(Math.random() * 100) + 20;
    alturaMosquito = alturaMosquito < 30 ? 30 : alturaMosquito;
}

function ladoRandomico() {
    if (Math.floor(Math.random() * 2) == 1) {
        lado = 1;
    } else {
        lado = -1;
    }
}

function posicaoRandomica() {

    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove();

        if (vidas > 3) {
            window.location.href = "fim_de_jogo.html";
        } else {
            document.getElementById('v' + vidas).src = "./imagens/coracao_vazio.png";
            vidas++;
        }

    }


    var posicaoY = Math.floor(Math.random() * altura) - 90;
    var posicaoX = Math.floor(Math.random() * largura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;


    tamanhoRandomico();
    ladoRandomico();

    var mosquito = document.createElement('img');
    mosquito.src = 'imagens/mosquito.png';
    mosquito.className = 'mosquito1';
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.style.height = alturaMosquito + 'px';
    mosquito.style.width = alturaMosquito + 'px';
    mosquito.style.transform = `scaleX(${lado})`;
    mosquito.id = 'mosquito';
    mosquito.onclick = function () {
        this.remove();
    }
    document.body.appendChild(mosquito);
}

ajustaTamanhoPalcoJogo();