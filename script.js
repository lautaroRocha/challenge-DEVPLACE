//Estos ejercicios fueron resueltos para realizarse desde un navegador



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


// 2. Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera. Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones, recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario presione una tecla, luego de esto se cerrará el programa.

const firstPass = document.querySelector('#first-pass')
const repeatPass = document.querySelector('#rpt-pass')
const btnPass = document.querySelector('#btn-pass')
const msgPass = document.querySelector('#msg-pass')

let tries = 0;

function memoryTest() {
    console.log(tries)
    //revisa si los valores ingresados coinciden, de lo contrario procede a contar 3 intentos
    if(firstPass.value === repeatPass.value){
        msgPass.textContent = 'Felicitaciones, recordás tu contraseña'
        window.onkeypress = () => {
            reset()
        }    }else{
        if(tries < 3){
            tries++
            repeatPass.value = "";
            repeatPass.style.outline = '3px solid red';
        }else{
            msgPass.textContent = 'Tenés que ejercitar la memoria'
            window.onkeypress = () => {
                reset()
            }        }
    }

    //reset de cantidad de intentos y mensajes en la ui
    function reset(){
        firstPass.value = "";
        msgPass.textContent = "";
        repeatPass.value = "";
        repeatPass.style.outline = 'none';
        tries = 0
    }
}

btnPass.onclick = () =>{
    memoryTest();
}


// 3. Por teclado se ingresa el valor hora de un empleado. Posteriormente se ingresa el nombre del empleado, la antigüedad y la cantidad de horas trabajadas en el mes. Se pide calcular el importe a cobrar teniendo en cuenta que al total que resulta de multiplicar el valor hora por la cantidad de horas trabajadas. Además, si el empleado tiene más de 10 años de antigüedad hay que sumarle la cantidad de años trabajados multiplicados por $30. Imprimir en pantalla el nombre, la antigüedad y el total a cobrar.

const valuePerHour = document.querySelector('#pay-per-hour');
const workersName = document.querySelector('#pay-worker-name');
const workersAntiq = document.querySelector('#pay-antiq');
const totalHours = document.querySelector('#pay-total-hours');
const btnPay = document.querySelector('#pay-calc')
const finalPay = document.querySelector('#pay-result')


function calculatePay(){
    let payment = valuePerHour.value * totalHours.value;
    //esta variable solo toma valor si el trabajador tiene 10 o más años de antiguedad, de lo contrario es un valor nulo.
    let extraForAntiq = workersAntiq.value >= 10 && 30 * workersAntiq.value;
    //la variable que se imprime en pantalla
    let totalPayment;

    //comprueba si existe extra por antiguedad y genera el pago total sumando el extra y el pago por hora, de lo contrario el pago total es el pago por hora.
   if(extraForAntiq){
    totalPayment = payment + extraForAntiq
   }else{
    totalPayment = payment;
   }
    finalPay.textContent = workersName.value + ' cobrará ' + totalPayment + ', tiene ' + workersAntiq.value + ' años de antiguedad';
}

btnPay.onclick = () => {
    calculatePay();
}

// 4. Generar un número aleatorio comprendido entre 0 y 1000. Pedir, a continuación, al usuario adivinar el número escogido por el ordenador. Para ello, debe introducir un número comprendido entre 0 y 1000. Se compara el número introducido con el calculado por el ordenador y se muestra en la consola "es mayor" o "es menor" en función del caso. Se repite la operación hasta que el usuario encuentra el número.

let randomNumber;

const startBtn = document.querySelector('#guess-btn');
const gameMsg = document.querySelector('#guess-msg');
const guessedNumber = document.querySelector('#guess-input');
const checkBtn = document.querySelector('#guess-check')

//esta función inicia el programa. genera un número entero aleatorio
function startGame(){
    randomNumber = Math.floor(Math.random() * 1000);
    gameMsg.textContent = "Estoy pensando un número entre 1 y 1000, ¿cuál es?"
    guessedNumber.value = ""; //se resetea ese valor en caso de que el usuario ya haya jugado
}
function checkGuess() {
    let guess = guessedNumber.value;
    //comprobaciones de igualda, menor que y mayor que. el programa da feedback al usuario según el caso
    if(guess == randomNumber){
        gameMsg.textContent = "Adivinaste! El número era " + randomNumber;
    }else if(guess < randomNumber){
        gameMsg.textContent = "El número en el que estoy pensando es más grande"
    }else if(guess > randomNumber){
        gameMsg.textContent = "El número en el que estoy pensando es más chico"
    }
}
startBtn.onclick = () => {
    startGame()
}
checkBtn.onclick = () => {
    checkGuess();
}

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




