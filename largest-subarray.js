var array = [1, -1, 5, 3, -7, 4, 5, 6, -100, 4];


function largestSubarray(array) {
  var total = 0;
  var current = 0;

  for (var i = 0; i < array.length; i++) {
    if (current + array[i] < 0) {
      current = 0;
    } else {
      current += array[i]
    };
    if (current > total) {
      total = current
    }
  }
  return total
}

const largestSubarray = (arr) => {
  let total = 0, temp = 0;
  for (var i = 0; i < arr.length; i++) {
    (temp + arr[i] < 0 ? temp = 0 : temp += arr[i]);
    if (temp > total) total = temp;
  }
  return total;
}
