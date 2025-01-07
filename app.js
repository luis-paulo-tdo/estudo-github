let tentativas = 1;
let limiteumerosSorteados = 100;
let numerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let botaoReiniciar = document.getElementById('reiniciar');

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', `Escolha um número entre 1 e ${limiteumerosSorteados}`);
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;

        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagemTentativas);
        botaoReiniciar.removeAttribute('disabled');

    } else {

        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }

        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * limiteumerosSorteados + 1);
    let quantidadeNumerosSorteados = numerosSorteados.length;

    if (quantidadeNumerosSorteados == limiteumerosSorteados) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    const chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    tentativas = 1;
    numeroSecreto = gerarNumeroAleatorio();

    limparCampo();
    exibirMensagemInicial();
    botaoReiniciar.setAttribute('disabled', true);
}
