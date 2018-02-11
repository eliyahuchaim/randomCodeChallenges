var array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];


function largestSubarraySum(array) {
  var max = array[0], current = array[0];

    for (var i = 1; i < array.length; i++) {
      current = current + array[i];
      console.log("this is current", current);
      console.log("this is max", max);
      if(current < 0){
        current = 0
      }
      if (max < current){
        max = current
      }
    }
  return max;
}

largestSubarraySum(array)



function largestSubarraySum(array) {
  let current = 0;
  let max = 0;

  for (var i = 1; i < array.length; i++) {
    current = current + array[i];
    if (current < 0){
      current = 0
    };
    if (max < current){
      max = current
    }
  }
  return max;
}

2
4
1 2 3 4
6
2 -1 2 3 4 -5

function parseInput(input){
  var result = [];
  var inputArr = input.split("\n");

  for (i = 0, j = 2; i < inputArr[0]; i++, j+=2){
    result.push(inputArr[j].split(" "))
  }
  return result;
}
