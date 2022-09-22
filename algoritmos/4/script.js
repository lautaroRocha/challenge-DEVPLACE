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
