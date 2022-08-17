"use strict"

function mostrarResultado(){
    const numero1 = parseFloat(document.getElementById('num1').value) 
    const numero2 = parseFloat(document.getElementById('num2').value) 
    const result = document.getElementById('result')

    let valorFinal

    if (numero1 < numero2){
        valorFinal = numero2 - numero1
    }else if (numero2 < numero1){
        valorFinal = numero1 - numero2
    }

    result.textContent = `o resultado é ${valorFinal}`
}
document.getElementById('subtrair').addEventListener('click', mostrarResultado)
