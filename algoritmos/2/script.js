// 2. Escribe una aplicación que solicite al usuario que ingrese una contraseña cualquiera. Después se le pedirá que ingrese nuevamente la contraseña, con 3 intentos. Cuando acierte ya no pedirá más la contraseña y mostrará un mensaje diciendo “Felicitaciones, recordás tu contraseña”. Si falla luego de 3 intentos se mostrará el mensaje “Tenes que ejercitar la memoria”. Los mensajes quedarán en pantalla a la espera que el usuario presione una tecla, luego de esto se cerrará el programa.

const firstPass = document.querySelector('#first-pass')
const repeatPass = document.querySelector('#rpt-pass')
const btnPass = document.querySelector('#btn-pass')
const msgPass = document.querySelector('#msg-pass')

let tries = 0;

function memoryTest() {
    //revisa si los valores ingresados coinciden, de lo contrario procede a contar 3 intentos
    if(firstPass.value === repeatPass.value){
        msgPass.textContent = 'Felicitaciones, recordás tu contraseña'
        setTimeout(reset, 2500)  
    }else{
        if(tries < 3){
            tries++
            repeatPass.value = "";
            repeatPass.style.outline = '3px solid red';
        }else{
            msgPass.textContent = 'Tenés que ejercitar la memoria'
            setTimeout(reset, 2500)  
        }
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
