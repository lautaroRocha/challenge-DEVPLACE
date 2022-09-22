// 1. Pide un número por teclado e indica si es un número primo o no. Un número primo es
// aquel que solo puede dividirse entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que
// 25 es divisible entre 5, sin embargo, 17 si es primo.



//desde el DOM se levantan los elementos del programa: el valor del número ingresado, el botón que acciona la evaluación y el espacio donde se verá el resultado(esto se hará en todos los ejercicios)
let numberToEvaluate = document.querySelector('#input-number')
let triggerBtn = document.querySelector('#trigger-btn')
let resultMsg = document.querySelector('#msg')

function isPrime(n){
    //flag es el indicador que cambia al encontrar un número primo
    let flag = true; 
    ///itera desde 2 hasta el valor ingresado todos los números(el 1 no nos interesa)
    for(let i = 2; i <= n - 1; i++){  
    //busca que el resto sea 0(que n sea divisible por i), si se cumple la condición le bucle se corta y la variable indicador cambia a falsa
    if (n % i == 0) {         
        flag = false;
        break
    }}
    //la variable indicador (flag) es evaluada y se imprime el resultado
    if(flag === true){
        resultMsg.textContent = n + " es primo";
    }else{
        resultMsg.textContent = n + " no es primo";
    }
}

triggerBtn.onclick = () => {
    isPrime(numberToEvaluate.value);
}

