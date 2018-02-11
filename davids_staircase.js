//recursion - breaks after 32

function staircase(n, counter) {
  if (n < 0){
    return 0
  } else if (n === 0) {
    return 1
  }
  return counter + staircase(n -1, counter) + staircase(n - 2, counter) + staircase(n - 3, counter)
 }

//looping

function staircase(n){
  var array = [1,2,4]
  if(n === 1){
    return 1
  } else if (n === 2) {
    return 2
  } else if (n === 3) {
    return 4
  }

  for (i = 3; i < n; i++){
    array[i] = array[i -1] + array[i - 2] + array[i -3]
    // console.log(array);
  }
  return array[array.length-1]
}


function myStaircase(stairs, start = 0, nums = []) {
  if (start !== stairs) {
    if (start == 0) {
      nums[start] = 1;
      return myStaircase(stairs, start + 1, nums)
    } else if (start == 1) {
      nums[start] = 2;
      return myStaircase(stairs, start + 1, nums)
    } else if (start == 2) {
      nums[start] = 4;
      return myStaircase(stairs, start + 1, nums)
    } else {
      nums[start] = nums[start-1] + nums[start-2] + nums[start-3]
      return myStaircase(stairs, start + 1, nums)
    }

  }
  return nums[nums.length -1]
}



//

function myStaircase(stairs, start = 0, nums = []) {
  if (start !== stairs) {
    if (start == 0) {
      nums[start] = 1;
    } else if (start == 1) {
      nums[start] = 2;
    } else if (start == 2) {
      nums[start] = 4;
    } else {
      nums[start] = nums[start-1] + nums[start-2] + nums[start-3]
    }
    return myStaircase(stairs, start + 1, nums)
  }
  return nums[nums.length -1]
}
