var test1 = [2, 1, 3, 1, 2]

var sum = 1;


function merge(left,right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift())
    } else {
      if (right[0] < left[0]) {
        sum +=1
      }
      sorted.push(right.shift())
    }
  }
  return sorted.concat(left).concat(right)
}

function sort(array) {
  if (array.length < 2) {
    return array
  }

  let leftHalf = merge(sort(array.slice(0, array.length / 2)), []);
  let rightHalf = merge(sort(array.slice(array.length / 2)), []);
  return merge(leftHalf, rightHalf)
}

sum = 0;
sort(test1);
console.log(sum);
