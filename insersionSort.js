var arr = [54,76,12,3,7,8,4,5,0,9];


function insertionSort(array) {
  if (array.length < 2){
    return array
  }
  let min = array[0];
  let index = 0;
  for (i = 1; i < array.length; i++){
    if (array[i] < min){
      min = array[i];
      index = i;
    }
  }
  return array.splice(index, 1).concat(insertionSort(array));
}
