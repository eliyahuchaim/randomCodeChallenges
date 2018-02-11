var array = [
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 1, 0, 0, 0, 0 ],
[ 1, 1, 1, 0, 0, 0 ],
[ 0, 9, 2, 4, 4, 0 ],
[ 0, 0, 0, 2, 0, 0 ],
[ 0, 0, 1, 2, 4, 0]
]

var test = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
]


var test = [
[-1, -1, 0, -9, -2, -2],
[-2, -1, -6, -8, -2, -5],
[-1, -1, -1, -2, -3, -4],
[-1, -9, -2, -4, -4, -5],
[-7, -3, -3, -2, -9, -9],
[-1, -3, -1, -2, -4, -5]
]

function createHourGlass(array) {
  let line = 0;
  let currentGlassTotal = Number.NEGATIVE_INFINITY
  let temp = 0;

  while (line < 4) {
    for (i = 1, j = 1; i < 5; i++, j++){
      temp = array[line][i-1] + array[line][i] + array[line][i+1] + array[line+1][j] + array[line+2][i-1] + array[line+2][i] + array[line +2][i+1]
      if (temp > currentGlassTotal){
        currentGlassTotal = temp
      }
    }
    line++
  }
  return currentGlassTotal
}

createHourGlass(test)
