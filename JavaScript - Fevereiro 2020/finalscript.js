//shift + alt + f para formatar identação

let numero = window.document.querySelector("input#numeroinsert");
let lista = window.document.getElementById("listaselecione");
let res = window.document.getElementById("resultado");
let values = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

//verificar o motivo do -1 abaixo na aula de arrays
//if (l.indexOf(Number(n)) != -1) = diz que a ordem do numero no array deve ser diferente de -1
// o indexof retornará -1 sempre que não encontrar um valor dentro do array
//o " ! " significa "não" em JavaScript

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(numero.value) && !inLista(numero.value, values)) {
        values.push(Number(numero.value))
        let item = document.createElement("option")
        item.text = `Valor ${numero.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        window.alert(`Valor invalido ou já esta na lista!`)
    }
    numero.value = ""
    numero.focus()
}



function finalizar() {
    if (values.length == 0) {
        window.alert("Adicione um numero")
    } else {
        let total = values.length
        let maior = values[0]
        let menor = values[0]
        let soma = 0
        let media = 0
        for (let position in values) {
            soma += values[position]
            if (values[position] > maior)
                maior = values[position]
            if (values[position] < menor)
                menor = values[position]
        }
        media = soma / total
        res.innerHTML = ``
        res.innerHTML += `<p>Temos ${total} registros</p>`
        res.innerHTML += `<p>Maior valor é ${maior}</p>`
        res.innerHTML += `<p>Menor valor é ${menor}</p>`
        res.innerHTML += `<p>A soma de todos é ${soma}</p>`
        res.innerHTML += `<p>A média de todos é ${media}</p>`
    }
}



