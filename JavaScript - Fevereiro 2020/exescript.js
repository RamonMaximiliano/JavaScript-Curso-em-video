
/*Função ativada no botão*/ 
function carregar() {
    var mensagem = window.document.getElementById("mensagem");
    var imgperiodo = window.document.getElementById("fotodia");
    var turnoQual1 = window.document.getElementById("horadodia");
    var turnoQual = Number(turnoQual1.value);

    if (turnoQual <= 12 && turnoQual >= 8) {
        imgperiodo.src = `./images/morning.png`
        document.body.style.background = "#a6d7ff";
        mensagem.innerHTML = `Agora são ${turnoQual} da manhã!</br>Bom dia!!!`;

    }
    else if (turnoQual > 12 && turnoQual <= 18) {
        imgperiodo.src = `./images/afternoon.png`
        document.body.style.background = "#faa554";
        mensagem.innerHTML = `Agora são ${turnoQual} da tarde!</br>Boa tarde!!!`;

    }
    else {
        imgperiodo.src = `./images/night.png`
        document.body.style.background = "#382d22";
        mensagem.innerHTML = `Agora são ${turnoQual} da noite!</br>Boa noite!!!`;
    }
}

/*Função ativada automaticamente ao carregar a pagina*/ 
function carregar2() {
    var mensagem = window.document.getElementById("mensagem");
    var imgperiodo = window.document.getElementById("fotodia");
    var turno = new Date();
    var turnoQualé = turno.getHours();

    if (turnoQualé <= 12 && turnoQualé >= 8) {
        imgperiodo.src = `./images/morning.png`
        document.body.style.background = "#a6d7ff";
        mensagem.innerHTML = `Agora são ${turnoQualé} da manhã!</br>Bom dia!!!`;

    }
    else if (turnoQualé > 12 && turnoQualé <= 18) {
        imgperiodo.src = `./images/afternoon.png`
        document.body.style.background = "#faa554";
        mensagem.innerHTML = `Agora são ${turnoQualé} da tarde!</br>Boa tarde!!!`;

    }
    else {
        imgperiodo.src = `./images/night.png`
        document.body.style.background = "#382d22";
        mensagem.innerHTML = `Agora são ${turnoQualé} da noite!</br>Boa noite!!!`;
    }
}
