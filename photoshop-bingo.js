function createImages() {
  var arr = [];
  for (var i = 1; i < 21; i++) {
    var tempObj = {};
    tempObj['id'] = i;
    tempObj['image'] = 'fake image ' + i;
    arr.push(tempObj)
  };
  return arr;
};



function placeOnBoard() {
  var images = createImages();
  var board = {};
  var selected = {};
  var boardCounter = 0;

  while (boardCounter < 25) {
    var rand = Math.floor(Math.random() * images.length);
    var tempImage = images[rand];
    if (selected[tempImage.id]) {
      if (selected[tempImage.id] < 2){
        board[boardCounter+=1] = images[rand];
        selected[tempImage.id]++
      } else {
        images.splice(rand, 1);
      }
    } else {
      selected[tempImage.id] = 1;
      board[boardCounter+=1] = images[rand];
    };
  };
  return board;
}

function test(board) {
  var table = {};
  for (obj in board){
    if (table[board[obj].id]) {
        table[board[obj].id]++
    } else {
      table[board[obj].id] = 1;
    }
  }
  for (obj in table){
    if (table[obj] > 2) {
      return false;
    }
  }
  return true;
}
