// 2)Escribir una función Reemplazar que tenga como argumentos una pila con tipo de elemento int y dos valores int: nuevo y viejo de forma que si el segundo valor aparece en algún lugar de la pila,sea reemplazado por el segundo.

const listOfInters = [0, 1, 2, 3, 4, 5]

//se podría usar TypeScript para añadir tipado y solo permitir ingresar enteros
//la función declara una variable que es verdadera si el array incluye el tercer argumento de la función. Si esa condición se cumple, se busca su índice y mediante el método splice se elimina y es reemplazado por el segundo argumento de la función.
function replace(ar, newInt, oldInt){
    let oldExists = ar.includes(oldInt) 
    if(oldExists){
        let indexToRemove = ar.indexOf(oldInt);
        ar.splice(indexToRemove, 1, newInt)
        console.log(ar)
    }else{
        console.log('can´t replace bro')
    }
}

replace(listOfInters, 12, 2);
///[0, 1, 12, 4, 5]