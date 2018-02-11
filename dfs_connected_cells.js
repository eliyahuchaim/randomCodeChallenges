var test1 = [
  [ 0, 0, 1, 1 ],
  [ 0, 0, 1, 0 ],
  [ 0, 1, 1, 0 ],
  [ 0, 1, 0, 0 ],
  [ 1, 1, 0, 0 ]
];


var test2 = [
  [ 1, 1, 0, 0 ],
  [ 0, 1, 1, 0 ],
  [ 0, 0, 1, 0 ],
  [ 1, 0, 0, 0 ]
];


var test3 = [
[0, 1, 0, 0, 0, 0, 1, 1, 0],
[1, 1, 0, 0, 1, 0, 0, 0, 1],
[0, 0, 0, 0, 1, 0, 1, 0, 0],
[0, 1, 1, 1, 0, 1, 0, 1, 1],
[0, 1, 1, 1, 0, 0, 1, 1, 0],
[0, 1, 0, 1, 1, 0, 1, 1, 0],
[0, 1, 0, 0, 1, 1, 0, 1, 1],
[1, 0, 1, 1, 1, 1, 0, 0, 0]
];




function connectedCellDfs(array) {
  let max = 0;
  let counter = 0;

  while (counter < array.length){
    for (i = 0; i <= array[counter].length; i++){
        if(array[`${counter}`][`${i}`] === 1){
        let tempSum = findConnectedCells(`${counter}${i}`, array)
        if (tempSum > max) {
          max = tempSum
        }
      }
      }
    counter++
  }
  console.log(max)
}

function findConnectedCells(startingIndex, array){
  let visited = [];
  let queue = [startingIndex];
  let sum = 0;

  if (array[startingIndex[0]][startingIndex[1]] === 1){
    sum +=1
  }

  while(queue.length > 0){
    let current = queue.shift();
    let index1 = parseInt(current[0]);
    let index2 = parseInt(current[1]);

    visited.push(current);
    // first check left
    if (array[index1][index2 -1] && !visited.includes(`${index1}${index2 -1}`) && !queue.includes(`${index1}${index2 -1}`)){
      queue.push(`${index1}${index2 -1}`);
      sum +=1
    }
    //check right
    if (array[index1][index2 + 1] && !visited.includes(`${index1}${index2 + 1}`) && !queue.includes(`${index1}${index2 +1}`)){
      queue.push(`${index1}${index2 + 1}`);
      sum +=1
    }
    //check up
    if (!!array[index1-1] && array[index1 - 1][index2] && !visited.includes(`${index1 -1}${index2}`) && !queue.includes(`${index1 -1}${index2}`)){
      queue.push(`${index1 -1}${index2}`);
      sum +=1
    }
    // check top right
    if (!!array[index1-1] && array[index1 - 1][index2 + 1] && !visited.includes(`${index1 -1}${index2 + 1}`) && !queue.includes(`${index1 -1}${index2 + 1}`)){
      queue.push(`${index1 -1}${index2 + 1}`);
      sum +=1
    }
    // check top left
    if (!!array[index1-1] && array[index1 - 1][index2 - 1] && !visited.includes(`${index1 -1}${index2 - 1}`) && !queue.includes(`${index1 -1}${index2 -1}`)){
      queue.push(`${index1 -1}${index2 - 1}`);
      sum +=1
    }
    //check bellow
    if (!!array[index1+1] && array[index1 + 1][index2] && !visited.includes(`${index1 + 1}${index2}`) && !queue.includes(`${index1 + 1}${index2}`)){
      queue.push(`${index1 + 1}${index2}`);
      sum +=1
    }
    //check bellow left
    if (!!array[index1+1] && array[index1 + 1][index2 - 1] && !visited.includes(`${index1 + 1}${index2 - 1}`) && !queue.includes(`${index1 + 1}${index2 -1}`)){
      queue.push(`${index1 + 1}${index2 - 1}`);
      sum +=1
    }
    //check below right
    if (!!array[index1+1] && array[index1 + 1][index2 + 1] && !visited.includes(`${index1 + 1}${index2 + 1}`) && !queue.includes(`${index1 + 1}${index2 + 1}`)){
      queue.push(`${index1 + 1}${index2 + 1}`);
      sum +=1
    }
  }
  return sum
}
