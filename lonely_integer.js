var arr = [];



function findUnique(arr){
  let current = arr[0]

  if (arr.length === 1){
    console.log(current)
    return arr[0]
  } else if (arr.length === 0) {
    return "No Uniques"
  }

  for (i = 0; i < arr.length; i++){
    if (arr[i + 1] === current){
      arr.splice(0, 1)
      arr.splice(i, 1)
      return findUnique(arr)
    }
  }
  // return findUnique([current]) // not needed
}
