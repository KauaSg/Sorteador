function exibirTextoNaTela(tag, texto) {
    let campo = document.getElementById(tag);
    campo.innerHTML = texto;
}

function alterarTexto (texto) {
    let campo = document.getElementById(`resultado`);
    campo.innerHTML = texto;
}


function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let listaDeNumerosSorteados = [];
    let numeroSorteado;
 

    for (let i = 0; i < quantidade; i++){

        numeroSorteado = gerarNumeroAleatorio(de, ate)

        while(listaDeNumerosSorteados.includes(numeroSorteado)){
            numeroSorteado = gerarNumeroAleatorio(de, ate)
        }

        listaDeNumerosSorteados.push(numeroSorteado)

    }

    alterarTexto(`<label class="texto__paragrafo">Números sorteados:  ${listaDeNumerosSorteados}</label>`)

    alterarBotaoReiniciar()
    console.log(listaDeNumerosSorteados)
}


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function alterarBotaoReiniciar() {
    let alterarBotaoReiniciar = document.getElementById('btn-reiniciar')

    if (alterarBotaoReiniciar.classList.contains("container__botao-desabilitado")){
        alterarBotaoReiniciar.classList.remove("container__botao-desabilitado")
        alterarBotaoReiniciar.classList.add("container__botao")
    } else {
        alterarBotaoReiniciar.classList.remove("container__botao")
        alterarBotaoReiniciar.classList.add("container__botao-desabilitado")
    }
}

function reiniciar() {
    limparCampo("quantidade")
    limparCampo("de")
    limparCampo("ate")
    alterarBotaoReiniciar()
    alterarTexto ('<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>')
}

function limparCampo(id) {
    document.getElementById(id).value=''
}


