// 1)Implementar una función que recibe una lista de enteros L y un número entero n de forma que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este valor



//la función removePassedElement busca en el array ingresado el índice del valor recibido, y después lo elimina usando el método splice, indicando el valor a remover y que solo se quite 1 elemento.
const listOfInters = [0, 1, 2, 3, 4, 5]


function removePassedElement(ar, val) {
    let indexToRemove = ar.indexOf(val);
    ar.splice(indexToRemove, 1);
    console.log(ar);
}

removePassedElement(listOfInters, 3)
///[0, 1, 2, 4, 5]
