var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];


function quickSortPivot(array){
  console.log("this is array:", array);
  if (array.length < 2){
    return array
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

    for (i = 1; i < array.length; i++){
      if (array[i] < pivot){
        lesser.push(array[i]);
      } else {
        greater.push(array[i]);
      }
    }
    return quickSortPivot(lesser).concat(pivot, quickSortPivot(greater))
}


// while loop

function whileLoopReverse(array) {
  const arr = array;
  //while there is still something in the array
  while(arr.length){
  //pop() will remove the last element of the array, so we just have to log it
  console.log(arr.pop());
  };
}


function reverseWithRecurion(array) {
  // first we log the last element of the array
  console.log(array[array.length -1]);
  if (array.length < 2) {
    // if we are up to the last element, we return up the stack and break out of the function
    return;
  } else {
    // call the function again, but this time only pass in the array - the last element
    return reverseWithRecurion(array.slice(0, -1))
  }
}


function createNewReveresedArrayWithRecursion(array) {
  if (array.length < 2) {
    return array
  };
  return array.slice(-1).concat(createNewReveresedArrayWithRecursion(array.slice(0,-1)))
};


function reverseWithForEachBCMendyCohen(array) {
  array.forEach(element => {
    console.log(array[array.length - array.indexOf(element) - 1]);
  })
}
