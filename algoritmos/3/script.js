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
