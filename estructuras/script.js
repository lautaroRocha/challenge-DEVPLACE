///para verificar las funciones, se puede correr node/estructuras/script.js en la terminal


// Listas, Pilas, Colas.

// 1)Implementar una función que recibe una lista de enteros L y un número entero n de forma que modifique la lista mediante el borrado de todos los elementos de la lista que tengan este valor

//este array será usado por todas las funciones que necesiten ingresar una lista/pila
const listOfInters = [0, 1, 2, 3, 4, 5]


//la función removePassedElement busca en el array ingresado el índice del valor recibido, y después lo elimina usando el método splice, indicando el valor a remover y que solo se quite 1 elemento.
function removePassedElement(ar, val) {
    let indexToRemove = ar.indexOf(val);
    ar.splice(indexToRemove, 1);
    console.log(ar);
}

removePassedElement(listOfInters, 3)


// 2)Escribir una función Reemplazar que tenga como argumentos una pila con tipo de elemento int y dos valores int: nuevo y viejo de forma que si el segundo valor aparece en algún lugar de la pila,sea reemplazado por el segundo.


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



// 3)Construir una función que sume los elementos de una lista de enteros recursivamente.


//la función usa el método reduce, al aplicar un callback a cada elemento del arreglo, se llama una y otra vez a sí misma, por lo que hay recursión
function recursivelySumItems(ar){
    let sum = ar.reduce( (previous, current) => previous + current, 0);
    console.log(sum);
}

recursivelySumItems(listOfInters);


// ARBOLES

// 1. ¿Qué nodo es la raíz?  --- La raíz es el nodo A
// 2. ¿Cuántos caminos diferentes de longitud tres hay? --- Hay 2, uno es A, E, N, Q y el otro es A, E, N, P.
// 3. ¿Es un camino la sucesión de nodos HGFBACI? --- Sí
// 4. ¿Qué nodos son los ancestros de K?  --- Sus ancestros son J, C y A.
// 5. ¿Qué nodos son los ancestros propios de N? --- Uno solo, E.
// 6. ¿Qué nodos son los descendientes propios de M? --- No tiene, es un nodo hoja.
// 7. ¿Qué nodos son las hojas? --- Las hojas son H, L, M, P, D y Q.
// 8. ¿Cuál es la altura del nodo C? -- La altura es de 3.
// 9. ¿Cuál es la altura del árbol? -- El árbol tiene una altura de 5.
// 10. ¿Cuál es la profundidad del nodo C? -- Su profundidad es 1.
// 11. ¿Cuál es el hermano a la derecha de D? -- Su hermano a la derecha es E
// 12. ¿Es I hermano a la derecha de F? -- No, porque tienen padres distintos.
// 13. ¿Está F a la izquierda de J?  -- sí
// 14. ¿Está L a la derecha de J? -- No
// 15. ¿Qué nodos están a la izquierda y a la derecha de J? --- I y N
// 16. ¿Cuántos hijos tiene A? --- 4 hijos
// 17. Listar los nodos del árbol en preorden,postorden e inorden. 
 

    // PREORDEN = A, B, F, G, H, C, I, J, K, L, M, D, E, N, P, Q.

    // POSTORDEN = B, F, G, H, C, I, J, K, L, M, D, E, N, P, Q, A

    // INORDEN = B, F, G, H, C, I, J, K, L, M, A, D, E, N, P, Q. 
