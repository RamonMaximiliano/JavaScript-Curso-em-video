function checkProfile () {
    var data = new Date ();
    var anos = data.getFullYear();
    var idades = window.document.getElementById ("idadeuser");
    var resultados = window.document.querySelector ("div.resultadofinal");
    if (idades.value.length == 0 || Number (idades.value) > anos ) {
            window.alert(`Erro!!! Verifique os dados e tente novamente!`)
    } else {
        var sexo = window.document.getElementsByName ("sexouser")
        var idadefim = anos - Number(idades.value)
        /*resultados.innerHTML = `A idade é ${idadefim}`;*/
        var genero =""
        var img = window.document.createElement ("img")
        img.setAttribute("id", "newfoto")

        if (sexo[0].checked) {
            genero = "Homem" 
            if (idadefim >=0 && idadefim< 12 ) {
                    // criança
                    img.setAttribute("src", "./images/menino.png")
                    img.width = 500;
                    img.height = 350;

                } else if (idadefim <21 ) {
                   // Jovem
                   img.setAttribute("src", "./images/adolescentemenino.png")
                   img.width = 500;
                   img.height = 350;

                } else if (idadefim <50 ){
                    // Adulto
                    img.setAttribute("src", "./images/homem.png")
                    img.width = 500;
                    img.height = 350;

                } else { 
                    // Idoso
                    img.setAttribute("src", "./images/velho.png")
                    img.width = 500;
                    img.height = 350;
                } 
            }
              
        if (sexo[1].checked) {
            genero = "Mulher" 
            if (idadefim >=0 && idadefim< 12 ) {
                    // criança
                    img.setAttribute("src", "./images/menina.png")
                    img.width = 500;
                    img.height = 350;
                } else if (idadefim <21 ) {
                    // Jovem
                    img.setAttribute("src", "./images/adolescentemenina.png")
                    img.width = 500;
                    img.height = 350;
                } else if (idadefim <50 ){
                    // Adulto
                    img.setAttribute("src", "./images/mulher.png")
                    img.width = 500;
                    img.height = 350;
                } else { 
                    // Idoso
                    img.setAttribute("src", "./images/velha.png")
                    img.width = 500;
                    img.height = 350;
                } }        
            resultados.style.textAlign = "center"
            resultados.innerHTML = `A pessoa é ${genero} e tem ${idadefim} anos!`;
            resultados.appendChild(img)



    }
}