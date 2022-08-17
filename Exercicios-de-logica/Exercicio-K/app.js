function valorNumerico(){
    const numero1 = +(document.getElementById('num1').value) 
    const result = document.getElementById('result')
    let resultado
    let numerico

    if(numero1 > 9) {
        numerico = 'Teste maior que 9'
    }else if(numero1 < 1){
        numerico = 'Teste menor que 1'
    }
        
   
        result.textContent = numerico
    }

document.getElementById('calcularNumerico').addEventListener('click', valorNumerico)
 