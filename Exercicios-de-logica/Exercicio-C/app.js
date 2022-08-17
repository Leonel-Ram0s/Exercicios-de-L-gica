'use strict'

function calcularMedia(){
    const numero1 = parseFloat(document.getElementById('num1').value) 
    const numero2 = parseFloat(document.getElementById('num2').value)
    const numero3 = parseFloat(document.getElementById('num3').value)
    const numero4 = parseFloat(document.getElementById('num4').value)
    const result = document.getElementById('result')
    let resultado
    let mediaFinal

    resultado = (numero1 + numero2 + numero3 + numero4) / 4

    if(resultado > 5){
            mediaFinal = 'aprovado'
        }
    else{
            mediaFinal = 'reprovado'
        }
        result.textContent = `O aluno foi ${mediaFinal} | Media: ${resultado.toFixed(2)}`
    }

document.getElementById('calcularMedia').addEventListener('click', calcularMedia)
 