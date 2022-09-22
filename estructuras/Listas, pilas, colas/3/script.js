// 3)Construir una función que sume los elementos de una lista de enteros recursivamente.

const listOfInters = [0, 1, 2, 3, 4, 5]

//la función usa el método reduce, al aplicar un callback a cada elemento del arreglo, se llama una y otra vez a sí misma, por lo que hay recursión
function recursivelySumItems(ar){
    let sum = ar.reduce( (previous, current) => previous + current, 0);
    console.log(sum);
}

recursivelySumItems(listOfInters);
///15