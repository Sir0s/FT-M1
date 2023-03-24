'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [];
  let factor = 2;
  while (num !== 1 && num!==0) {
    if (num % factor === 0) {
      arr.push(factor);
      num /= factor;
    } else factor++;
  }
  arr.push(num);
  selectionSort(arr)
  return arr;
}
function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let swap;
  for (let i = 0; i < array.length; i++) {
    for (let c = 0; c < array.length - 1 - i; c++) {
      if (array[c + 1] < array[c]) {
        swap = array[c + 1];
        array[c + 1] = array[c];
        array[c] = swap;
      }
    }
  }
  return array;
  /*let swap=true;
  for (let i = 0; i < array.length; i++) {
   while(swap){
      if (array[i] > array[i+1]) {
        swap = array[i];
        array[i] = array[i+1];
        array[i+1] = swap;
        swap=true;
      }
    }
  }
  return array;*/
}



function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let swap;
  for (let i = 1; i < array.length; i++) {
    for (let c = i - 1; c !== -1; c--) {
      if (array[c + 1] < array[c]) {
        swap = array[c + 1];
        array[c + 1] = array[c];
        array[c] = swap;
      }
    }
  }
  return array;
}
/* for (let i = 1; i < array.length; i++) {
  let j= i-1
  let aux = array[i]
  while(j>=0 && array[i+1]>aux){
    array[j+1]=aux;
  }
}
*/

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let swap=[];
  for (let c = 0; c < array.length; c++) {
    let min = array[c];
    for (let i = c + 1; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        var pos = i;
      }
      if (array[c] !== min) {
        swap[c] = array[c];
        array[pos] = swap[c];
        array[c] = min;
      }
    }
  }
 return array;
 
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
