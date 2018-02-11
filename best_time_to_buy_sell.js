var arr = [7, 1, 5, 3, 6, 4]


function maxProfit(arr) {
  var min = Number.POSITIVE_INFINITY;
  var maxProfit = 0;

  for (var i = 0; i < arr.length; i++){
    if(arr[i] < min){
      min = arr[i]
    } else if (arr[i] - min > maxProfit) {
      maxProfit = arr[i] - min
    }
  }
  return maxProfit
}


function maxProfit(arr) {
  minPrice = arr[0];
  maxProfit = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i]
    } else if (arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice
    }
  }
  return maxProfit
}




function MaxProfit(array) {
  var min = array[0];
  var profit = 0;
  var time = {
    buy: 0,
    sell: 0
  }

  for (var i = 1; i < array.length; i++) {
    if (array[i] < min){
      min = array[i];
      time.buy = i;
    } else if (array[i] - min > profit) {
      profit = array[i] - min;
      time.sell = i
    }
  }
  return [profit, time]
}
