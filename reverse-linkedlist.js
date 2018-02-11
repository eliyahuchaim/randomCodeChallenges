function Node(data) {
  this.data = data;
  this.next = null;
}

function createNodes() {
  let data = 1;

  const head = new Node(data);

  let currentNode = head;

  for (var i = 2; i < 5; i++) {
    let tempNode = new Node(i, currentNode);
    currentNode.next = tempNode;
    currentNode = tempNode;
  }
  return head;
}

function printNodes(node) {
  if (node) {
    console.log(node);
    if (node.next) {
      printNodes(node.next);
    } else {
      return;
    }
  }
}

var testList = createNodes();
// printNodes(testList);

reverseList(testList);

function reverseList(list) {
  let previous = null;
  let node = list;

  while (node){
    // we first save the next node
    let nextNode = node.next;
    // we set our current node to previous which first is null
    node.next = previous;
    // we now set previous to whatever node we are currently working on
    previous = node;
    // we set our current node to the next node
    node = nextNode;
  }
  // if nextNode is the last node, we break out and return the last one we worked on
  return previous;
}

// node 1
// save 2

function reversePrint(node) {
  if (!node) {
    return;
  }
  reversePrint(node.next);

  console.log(node);
}




const reverse = (node) => {
  if (!node) {
    console.log("last one");
    return;
  }
  console.log("hello from here");
  reverse(node.next);
  console.log(node.data);
}
