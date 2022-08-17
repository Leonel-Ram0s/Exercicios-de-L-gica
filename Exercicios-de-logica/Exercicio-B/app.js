"use strict"

function positivo(){
    const num1 = parseFloat(document.getElementById('num1').value) 
    const result = document.getElementById('result')



    let valorFinal

    if (num1 < 0){
        valorFinal = num1 * -1
    }else if (num1 > 0){
        valorFinal = num1
    }

    result.textContent = `o resultado é ${valorFinal}`
}
document.getElementById('positivo').addEventListener('click', positivo)
