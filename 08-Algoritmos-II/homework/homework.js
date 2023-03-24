'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) {
    return array;
  }
  let pivot = array[Math.floor(Math.random()* array.length)];
  let left = [];
  let right = [];
  let equal = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }
  return quickSort(left).concat(equal).concat(quickSort(right)); 

}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <= 1) return array;
  let divArr = split(array);
  let left = divArr[0];
  let right = divArr[1];
  return sorted(mergeSort(left), mergeSort(right));
}
function split(arr) {
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid, arr.length);
  return [left, right];
}
function sorted(l, r) {
  let l_index = 0;
  let R_index = 0;
  let arr = [];
  while (l_index < l.length && R_index < r.length) {
    if (l[l_index] < r[R_index]) {
      arr.push(l[l_index]);
      l_index++;
    } else {
      arr.push(r[R_index]);
      R_index++;
    }
  }
  return arr.concat(l.slice(l_index).concat(r.slice(R_index)));
}
  //okey probemos ahora
let ar=[1,12,23,34,1,5,3,4,0]
mergeSort(ar)

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
