function isPrime(n) {

  if (n < 2){
    return false
  }

  if (n === 2) {
    return true
  } else if (n % 2 === 0) {
    return false
  }

  var sqr = Math.sqrt(n);
  for(i = 3; i < sqr; i+=2){
    if (n % i === 0){
      return false
    }
  }
  return true
}


function isPrime(n){
  if(n < 2){
    return "Not prime"
  }

  if (n === 2){
    return "Prime"
  } else if (n % 2 === 0) {
    return "Not prime"
  }

  var sqRoot = Math.sqrt(n)
  for (var i = 3; i <= sqRoot; i+=2) {
    if (n % i === 0) {
      return "Not prime"
    }
  }
  return "Prime"
}




var arr = [30,1,4,9,16,25,36,49,64,81,100,121,144,169,196,225,256,289,324,361,400,441,484,529,576,625,676,729,784,841,907]
