var arr = [1,2,3];

function swap(array, a, b){
  var higher = array[a];
  var lower = array[b];
  array[a] = lower;
  array[b] = higher;
  return array
}


function bubbleSort(array){
  let counter = 0;
  let tempArr = array
  var isSorted = false;
  var lastIndex = tempArr.length -1
  while (!isSorted) {
    isSorted = true;
    for (i = 0; i < lastIndex; i++){
      if (array[i] > array[i + 1]){
        tempArr = swap(tempArr, i, i+1)
        isSorted = false
        counter++
      }
    }
    lastIndex--;
  }
  console.log(`Array is sorted in ${counter} swaps.` )
  console.log("First Element:", tempArr[0]);
  console.log("Last Element:", tempArr[tempArr.length -1]);
}

bubbleSort([4,3,2,1])

// my version

function swap(a,b, array) {
  let indexA = array[a];
  let indexB = array[b];
  array[a] = indexB;
  array[b] = indexA;
  return array;
}

function bubbleSort(array) {
  let sorted = false;
  let lastIndex = array.length -1;
  while(!sorted){
    sorted = true;
    for (i = 0; i < lastIndex; i++){
      if(array[i +1] < array[i]){
        sorted = false;
        array = swap(i+1, i, array);
      }
    }
  }
  return array;
}
