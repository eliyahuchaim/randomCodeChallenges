var arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

[2, 1, 3, 1, 2]

function merge(left, right){
  console.log("in MERGE:", left, right);
  var arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]){
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }
  return arr.concat(left).concat(right)
}

function sort(array){
  // console.log("this is array in SORT:", array);
  if (array.length < 2){
    return array
  };
  var left = array.slice(0, array.length / 2);
  var right = array.slice(array.length / 2);
  console.log("left", left);
  console.log("right", right);
  let l1 = merge(sort(left), []);
  let r1 = merge(sort(right), []);
  console.log("about to final merge:", l1, r1);
  return merge(l1, r1)

  // return merge(sort(left), sort(right))

}
