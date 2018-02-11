5 4

var arr =  [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51]

function shiftLeft(shifts, array){
  var tempArr = array.splice(0, shifts);
  for (i = array.length; i > 0; i--){
    tempArr.unshift(array[i-1])
  }
  console.log(tempArr.join(" "))
}
