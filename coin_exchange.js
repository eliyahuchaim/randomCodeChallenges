


var test1 = [[10], [4], [2, 5, 3, 6]]


var test2 = 4 [1, 2, 3]]

var test3 = [[166],[23],[5, 37, 8, 39, 33, 17, 22, 32, 13, 7, 10, 35, 40, 2, 43, 49, 46, 19, 41, 1, 12, 11, 28]]

function coinChange(arr) {
  var target = arr[0];
  var counter = arr[1];
  var results = 0;
  var sortedCoins = arr[2].sort((a,b) => {
    return a - b
  })
  var lastIndex = sortedCoins.length -1

  var initialComp = target - (sortedCoins[0])
  if (target - (sortedCoins[0] + initialComp) === 0) {
    results +=1
  }

  while (counter > 0) {
    var comp = target - (sortedCoins[0] + sortedCoins[lastIndex])
    if (target - (sortedCoins[0] + sortedCoins[lastIndex]) === 0 || target - (sortedCoins[0] + sortedCoins[lastIndex]) - comp === 0) {
      results +=1
    }
    counter--
    lastIndex--
  }
  return results
}

function coinChange(money,coins) {
  var combinations = [];
  combinations[0] = 1;

  for (var i = 1; i < money + 1; i++) {
    combinations[i] = 0
  };

  for (var i = 0; i < coins.length; i++) {
    for (var j = 0; j < combinations.length; j++) {
      if (j >= coins[i]){
        combinations[j] += combinations[j - coins[i]]
      }
    }
  }
  return combinations[combinations.length -1]
}
