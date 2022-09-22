// 5. Pedir al usuario que ingrese un número repetidamente hasta que ingrese un -1 y en ese
// caso se terminará el programa.
// Al terminar, mostrará lo siguiente:
// a. – mayor número introducido
// b. – menor número introducido
// c. – suma de todos los números
// d. – suma de los números

const newNum = document.querySelector('#num-input')
const addBtn = document.querySelector('#num-add')
const endBtn = document.querySelector('#num-end')
const finalMsg = document.querySelector('#num-result')
const numEnd = document.querySelector('#num-end')

//arreglo vacío al que se ingresarán los números propuestos por el usuario
let NUMBERS = [];

function addNumber(n){
    //el argumento ingresado a la función se parsea a dato de número entero y se pushea al arreglo, si no es -1 se limpia el campo de ingreso para que el usuario entienda que debe seguir agregando números, si el usuario ingresa -1 se llama a la función que termina el juego.
    if(parseInt(n) !== -1){
        NUMBERS.push(parseInt(n))
        newNum.value = "";
    }else{
        endGame()
    }
}

addBtn.onclick = () => {
    addNumber(newNum.value)
}
numEnd.onclick = () => {
    addNumber(-1)
}

function endGame(){
    //uso de métodos para encontrar el valor número, el mayor número, la suma de todos los números y generar una string con los números separados por comas.
    let biggestNum = Math.max(...NUMBERS)
    let smallestNum = Math.min(...NUMBERS)
    let totalSum = NUMBERS.reduce((partialSum, a) => partialSum + a, 0)
    let allNums = NUMBERS.join(', '); 
    finalMsg.textContent = ' Ingresaste todos estos números :' + allNums + '. Todos esos sumados dan ' + totalSum + '. El más grande es ' + biggestNum + ' y el más pequeño ' + smallestNum; 


}