function fibonacci(n){
  if (n <= 2){
    return 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}

// different version

function fib(n) {
  let a = 0;
  let b = 0;
  if (n <=2){
    return 1
  }
  a += fib(n-1)
  b += fib(n-2)

  return a + b
}
