const enviar = document.querySelector("form#formulario");
let linhaNova = "";

const nomeCheck = [];
const numbCheck = [];

enviar.addEventListener("submit", function(teste){
    teste.preventDefault()
    addLinha();
    
})

function addLinha(){
    const nome = document.getElementById("nomeCont");
    const numCel = document.getElementById("numbCont");

    
    if ((nomeCheck.includes(nome.value)) || (numbCheck.includes(numCel.value))) {
        alert("Nome ou Telefone já está incluso na lista. Adicione outro contato diferente.")
        
    } else {
        nomeCheck.push(nome.value);
        numbCheck.push(numCel.value);
        let linhaTab = "<tr>";
        linhaTab += `<th>${nome.value}</th>`;
        linhaTab += `<th>${numCel.value}</th>`;
        linhaTab += "</tr>";
    
        linhaNova += linhaTab;
    
        const tabCorpo = document.getElementById("tCorpo");
        tabCorpo.innerHTML = linhaNova
    
        document.getElementById("nomeCont").value = ""
        document.getElementById("numbCont").value = ""
    }

}


function justNumb(oInput){
    const msgErro = document.querySelector("p#msgErro");
    const valorAnterior = oInput.value
    oInput.value = oInput.value.replace(/[^0-9]/g, "")

    if (oInput.value !== valorAnterior) {
        msgErro.innerHTML = "Somente números"
        msgErro.style.color = "red"     
    } else {
        msgErro.innerHTML = ""
    }
}


