// function createNode(letter, end) {
//   return {letter: letter, end: end, child: {}}
// }

function createNode(letter = '', end = false) {
    this.letter = letter;
    this.end = end;
    this.children = {};
    return {letter: this.letter, end: this.end, children: this.children}
}

// my version

function trieFindOrAdd(input) {
  var counter = 0;
  this.rootNode = createNode();

  input.forEach(line => {
    let currentNode = this.rootNode;
    let word = line[1];
    if (line[0] === "add") {
      for (var i = 0; i < word.length; i++) {
        if (currentNode.children[word[i]]){
          currentNode = currentNode.children[word[i]];
        } else {
          currentNode.children[word[i]] = createNode(word[i]);
          currentNode = currentNode.children[word[i]];
        }
      }
      currentNode.end = true;
    } else {
      for (var i = 0; i < word.length; i++) {
        if (currentNode.children[word[i]]) {
          currentNode = currentNode.children[word[i]];
        } else {
          return false;
        }
      }
      if (currentNode.end) {
        counter++
      }
    }
  })
  return counter;
}

function checkAllNodeChildren(node, counter = 0) {
  // debugger
  if (node.end){
    counter++
  }
  if (Object.keys(node.children).length > 0) {
    for (current in node.children){
      return checkAllNodeChildren(node.children[current], counter)
    }
  }
  return counter;
}


// for hacker rank


function checkAllNodeChildren(node) {
  let counter = 0;
  let stack = [node];

  while(stack.length){
    let currentNode = stack.pop();
    // debugger

    if (currentNode.end) {
      counter++
    }

    if (Object.keys(currentNode.children).length > 0) {
      for (current in currentNode.children){
        stack.push(currentNode.children[current])
      }
    }
  }
  return counter;
}

// second solution

const store = {};


function add(value, node) {
  var char = value.substring(0,1);
  if(node[char]){
    node[char].count++
  } else {
    node[char] = {count: 1};
  }
  if (value.length > 1) {
    var rest = value.substring(1);
    add(rest, node[char])
  }
}

function find(value,node) {
  if (value.length == 1) {
    if (node[value]) {
      return node[value].count
    }
    return 0;
  }
  var char = value.substring(0,1);
    if (node[char]) {
      var rest = value.substring(1);
      return find(rest,node[char])
    }
  return 0;
}

// final solution for hacker rank

function createNode(letter = '') {
    this.letter = letter;
    this.end = false;
    this.children = {};
    this.count = 1;
    return {letter: this.letter, end: this.end, children: this.children, count: this.count}
}

function trieFindOrAdd(input) {
  var counter = 0;
  var results = [];
  this.rootNode = createNode();

  input.forEach(line => {
    let currentNode = this.rootNode;
    let word = line[1];
    if (line[0] === "add") {
      for (var i = 0; i < word.length; i++) {
        if (currentNode.children[word[i]]){
          currentNode = currentNode.children[word[i]];
          currentNode.count++
        } else {
          currentNode.children[word[i]] = createNode(word[i]);
          currentNode = currentNode.children[word[i]];
        }
      }
      currentNode.end = true;
    } else {
      counter = checkAllNodeChildren(this.rootNode, word)
      results.push(counter)
    }
  })
  return results;
}

function checkAllNodeChildren(node, word) {
  if (word.length == 1) {
    if (node.children[word]) {
      return node.children[word].count
    }
    return 0;
  }
  var letter = word.substring(0,1);
  if (node.children[letter]) {
    var remainder = word.substring(1);
    return checkAllNodeChildren(node.children[letter], remainder)
  }
  return 0;
}
