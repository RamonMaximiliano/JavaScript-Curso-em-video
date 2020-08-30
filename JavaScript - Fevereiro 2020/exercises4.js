

function dothemath() {
    let start1 = window.document.getElementById("start");
    let end1 = window.document.getElementById("end");
    let step1 = window.document.getElementById("step")
    let showmethemoney = window.document.querySelector("div#showmethemoney");

    if (start1.value.length == 0 || end1.value.length == 0 || step1.value.length == 0) {
        window.alert(`Não existem dados!`)
    } else {
        showmethemoney.innerHTML = "Contando: </br>"
        let start2 = Number(start1.value)
        let end2 = Number(end1.value)
        let step2 = Number(step1.value)
        if (step2 <= 0) {
            window.alert(`Espaço invalido, vamos considerar 1`)
            step2 = 1;
        }
        if (start2 < end2) {
            for (let finalf = start2; finalf <= end2; finalf += step2) {
                showmethemoney.innerHTML += ` ${finalf}  \u{1F600}`
            }
        } else {
            for (let finalf = start2; finalf >= end2; finalf -= step2)
                showmethemoney.innerHTML += ` ${finalf} \u{1F600}`
        }
    }
    showmethemoney.innerHTML += `\u{1F3C1}`
}


function dothetabuada() {
    let numero = window.document.querySelector("input#numeroum");
    let tabuadainterna = window.document.getElementById("tabuada");
    if (numero.value.length == 0) {
        window.alert(`Digite um numero!`)
    } else {
        let numerofinal = Number(numero.value)
        let maisuma = 1
        tabuada.innerHTML = ""
        while (maisuma <= 10) {
            let item = document.createElement("option")
            item.text = `${numerofinal} * ${maisuma} = ${numerofinal*maisuma}`
            item.value = `tabuada${maisuma}`
            tabuada.appendChild (item)
            maisuma++
        }
  }
}
