var arr = "1 2 3 4 5"

function highAndLow(numbers){
  const nums = numbers.split(" ");
  let high = parseInt(nums[0]);
  let low = parseInt(nums[0]);

  for (var i = 1; i < nums.length; i++){
    if (parseInt(nums[i]) > high){
      high = parseInt(nums[i])
    }
    if (parseInt(nums[i]) < low) {
      low = parseInt(nums[i])
    };
  };
  console.log(high, low);
}


function highAndLow(numbers) {
  const result = numbers.split(" ").sort((a, b) => {
    return parseInt(b) - parseInt(a)
  })
  return `${result[0]} ${result[result.length -1]}`
}
