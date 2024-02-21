const campoTabuada = document.getElementById("resultados-tabuada");

function Gerar() {
    let resultados = document.getElementById("resultados");
    let numberTabuada = document.getElementById("numberTabuada").value;
    let numberMultiplicador = 0; 
    let limits = 10;

    campoTabuada.style.display = "flex";

    if (numberTabuada < 1)  {
        alert("Digite um numero!");
        campoTabuada.style.display = "none";
    } else {
        for (let i = 0; i < limits; i++) {
            numberMultiplicador += 1;
            
            let novoParagrafo = document.createElement("p");
            let results = numberTabuada * numberMultiplicador;
            
            novoParagrafo.textContent = (`${numberTabuada}  x  ${numberMultiplicador}  =  ${results}`);
    
            resultados.appendChild(novoParagrafo);
            
        }     
    }

}

function Limpar() {
    
    numberTabuada.value = "";  
    
    resultados.innerText = ""; 

    campoTabuada.style.display = "none";
    
}



